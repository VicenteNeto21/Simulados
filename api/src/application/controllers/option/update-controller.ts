import { ValidationBuilder as builder, Validator } from '@/application/validation'
import { HttpResponse, ok, badRequest } from '@/application/helpers'
import { Controller } from '@/application/controllers'
import { UpdateOption } from '@/domain/usecases/option'
import { UpdateOption as Save, Option as IOption } from '@/domain/contracts/repos'

import { Question } from '@/infra/repos/postgres/entities'

type HttpRequest = Save.Input

type Model = Error | IOption
export class UpdateOptionController extends Controller {
  constructor (private readonly updateOption: UpdateOption) {
    super()
  }

  async perform (input: HttpRequest): Promise<HttpResponse<Model>> {
    try {
      const option = await this.updateOption(input)
      return ok(option)
    } catch (error: any) {
      return badRequest(error)
    }
  }

  override async buildValidators ({ question }: HttpRequest): Promise<Validator[]> {
    return [
      ...(await builder.of({ value: question, fieldName: 'question' }).sometimes().exists(Question)).build()

    ]
  }
}
