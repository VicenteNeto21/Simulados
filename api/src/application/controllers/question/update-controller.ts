import { ValidationBuilder as builder, Validator } from '@/application/validation'
import { HttpResponse, ok, badRequest } from '@/application/helpers'
import { Controller } from '@/application/controllers'
import { UpdateQuestion } from '@/domain/usecases/question'
import { UpdateQuestion as Save, Question as IQuestion } from '@/domain/contracts/repos'

import { Status } from '@/infra/repos/postgres/entities'

type HttpRequest = Save.Input & { passwordConfirmation?: string }

type Model = Error | IQuestion
export class UpdateQuestionController extends Controller {
  constructor (private readonly updateQuestion: UpdateQuestion) {
    super()
  }

  async perform ({ passwordConfirmation, ...data }: HttpRequest): Promise<HttpResponse<Model>> {
    try {
      const question = await this.updateQuestion(data)
      return ok(question)
    } catch (error: any) {
      return badRequest(error)
    }
  }

  override async buildValidators ({ status }: HttpRequest): Promise<Validator[]> {
    return [
      ...(await builder.of({ value: status, fieldName: 'status' }).sometimes().exists(Status)).build()

    ]
  }
}
