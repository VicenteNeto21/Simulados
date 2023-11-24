import { ValidationBuilder as builder, Validator } from '@/application/validation'
import { HttpResponse, unauthorized, forbidden, ok } from '@/application/helpers'
import { Controller } from '@/application/controllers'
import { AuthenticateUserAdmin } from '@/domain/usecases'
import { AuthenticationError } from '@/domain/entities/errors'

type HttpRequest = { email: string, password: string}

type Model = Error | { accessToken: string }
export class LoginAdminController extends Controller {
  constructor (private readonly authenticateUser: AuthenticateUserAdmin) {
    super()
  }

  async perform ({ email, password }: HttpRequest): Promise<HttpResponse<Model>> {
    try {
      const accessToken = await this.authenticateUser({ email, password })
      return ok(accessToken)
    } catch (err: any) {
      return err instanceof AuthenticationError
        ? unauthorized()
        : forbidden()
    }
  }

  override async buildValidators ({ email, password }: HttpRequest): Promise<Validator[]> {
    return [
      ...builder.of({ value: email, fieldName: 'email' }).required().email().build(),
      ...builder.of({ value: password, fieldName: 'password' }).required().build()
    ]
  }
}
