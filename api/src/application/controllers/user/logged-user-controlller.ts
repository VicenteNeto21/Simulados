import { ShowUser } from '@/domain/contracts/repos/user'
import { ValidationBuilder as builder, Validator } from '@/application/validation'
import { HttpResponse, ok, contentNotFound } from '@/application/helpers'
import { Controller } from '@/application/controllers'
import { LoggedUser } from '@/domain/usecases/user/logged-user'

type HttpRequest = { authUserId: string }

type Model = Error | ShowUser.Output
export class LoggedUserController extends Controller {
  constructor (private readonly showUser: LoggedUser) {
    super()
  }

  async perform ({ authUserId }: HttpRequest): Promise<HttpResponse<Model>> {
    try {
      const user = await this.showUser({ id: authUserId })
      return ok(user)
    } catch {
      return contentNotFound('user')
    }
  }

  override async buildValidators ({ authUserId }: HttpRequest): Promise<Validator[]> {
    return [
      ...builder.of({ value: authUserId, fieldName: 'token' }).required().build()
    ]
  }
}
