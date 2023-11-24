import { HttpResponse, ok, badRequest } from '@/application/helpers'
import { Controller } from '@/application/controllers'
import { ListUsers } from '@/domain/usecases/user'
import { User } from '@/domain/contracts/repos'

type Model = Error | User[]
export class GetUserController extends Controller {
  constructor (private readonly listUsers: ListUsers) {
    super()
  }

  async perform (): Promise<HttpResponse<Model>> {
    try {
      const users = await this.listUsers()
      return ok(users)
    } catch (error: any) {
      return badRequest(error)
    }
  }
}
