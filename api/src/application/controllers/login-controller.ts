import { ValidationBuilder as builder, Validator } from '@/application/validation'
import { HttpResponse, unauthorized, ok } from '@/application/helpers'
import { Controller } from '@/application/controllers'
import { AuthenticateUser } from '@/domain/usecases'

type HttpRequest = { email: string, password: string}

type Model = Error | { accessToken: string }
export class LoginController extends Controller {
  constructor (private readonly authenticateUser: AuthenticateUser) {
    super()
  }

  async perform ({ email, password }: HttpRequest): Promise<HttpResponse<Model>> {
    try {
      const accessToken = await this.authenticateUser({ email, password })
      return ok(accessToken)
    } catch {
      return unauthorized()
    }
  }

  override async buildValidators ({ email, password }: HttpRequest): Promise<Validator[]> {
    return [
      ...builder.of({ value: email, fieldName: 'email' }).required().build(),
      ...builder.of({ value: password, fieldName: 'password' }).required().build()
    ]
  }
}
