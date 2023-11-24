import { ValidationBuilder as builder, Validator } from '@/application/validation'
import { HttpResponse, badRequest, created } from '@/application/helpers'
import { Controller } from '@/application/controllers'
import { InsertOption } from '@/domain/usecases/option'

import { InsertOption as Save, Option as IOption } from '@/domain/contracts/repos'
import { Question } from '@/infra/repos/postgres/entities'

type HttpRequest = Save.Input

type Model = Error | IOption
export class InsertOptionController extends Controller {
  constructor (private readonly insertOption: InsertOption) {
    super()
  }

  async perform (httpRequest: Save.Input): Promise<HttpResponse<Model>> {
    try {
      const option = await this.insertOption(httpRequest)
      return created(option)
    } catch (error: any) {
      return badRequest(new Error(error.message))
    }
  }

  override async buildValidators ({ option, question }: HttpRequest): Promise<Validator[]> {
    return [
      ...builder.of({ value: option, fieldName: 'option' }).required().build(),
      ...(await builder.of({ value: question, fieldName: 'question' }).required().exists(Question)).build()
    ]
  }
}
