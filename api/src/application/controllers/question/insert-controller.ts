import { ValidationBuilder as builder, Validator } from '@/application/validation'
import { HttpResponse, badRequest, created } from '@/application/helpers'
import { Controller } from '@/application/controllers'
import { InsertQuestion } from '@/domain/usecases/question'

import { InsertQuestion as Save, Question as IQuestion } from '@/domain/contracts/repos'
import { User } from '@/infra/repos/postgres/entities'
import { Subject } from '@/infra/repos/postgres/entities/subject'

type HttpRequest = Save.Input

type Model = Error | IQuestion
export class InsertQuestionController extends Controller {
  constructor (private readonly insertQuestion: InsertQuestion) {
    super()
  }

  async perform (httpRequest: Save.Input): Promise<HttpResponse<Model>> {
    try {
      const question = await this.insertQuestion(httpRequest)
      return created(question)
    } catch (error: any) {
      console.log(error)
      return badRequest(new Error(error.message))
    }
  }

  override async buildValidators ({ statement, user, subject, type }: HttpRequest): Promise<Validator[]> {
    return [
      ...builder.of({ value: statement, fieldName: 'statement' }).required().build(),
      ...builder.of({ value: type, fieldName: 'type' }).required().build(),
      ...(await builder.of({ value: user, fieldName: 'user' }).required().exists(User)).build(),
      ...(await builder.of({ value: subject, fieldName: 'subject' }).required().exists(Subject)).build()
    ]
  }
}
