import { HttpResponse, ok, badRequest } from '@/application/helpers'
import { Controller } from '@/application/controllers'
import { ListQuestions } from '@/domain/usecases/question'
import { Question } from '@/domain/contracts/repos'

type Model = Error | Question[]
export class GetQuestionController extends Controller {
  constructor (private readonly listQuestions: ListQuestions) {
    super()
  }

  async perform (): Promise<HttpResponse<Model>> {
    try {
      const questions = await this.listQuestions()
      return ok(questions)
    } catch (error: any) {
      return badRequest(error)
    }
  }
}
