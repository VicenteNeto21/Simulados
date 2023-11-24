import { ValidationBuilder as builder, Validator } from '@/application/validation'
import { HttpResponse, ok, contentNotFound } from '@/application/helpers'
import { Controller } from '@/application/controllers'
import { ListQuestion } from '@/domain/usecases/question'
import { Question } from '@/domain/contracts/repos'

type HttpRequest = { id: string }

type Model = Error | Question
export class ShowQuestionController extends Controller {
  constructor (private readonly showQuestion: ListQuestion) {
    super()
  }

  async perform ({ id }: HttpRequest): Promise<HttpResponse<Model>> {
    try {
      const question = await this.showQuestion({ id })
      return ok(question)
    } catch {
      return contentNotFound('question')
    }
  }

  override async buildValidators ({ id }: HttpRequest): Promise<Validator[]> {
    return [
      ...builder.of({ value: id, fieldName: 'id' }).required().build()
    ]
  }
}
