import { ValidationBuilder as builder, Validator } from '@/application/validation'
import { HttpResponse, ok, badRequest } from '@/application/helpers'
import { Controller } from '@/application/controllers'
import { ResetPassword } from '@/domain/usecases'

type HttpRequest = { id: string }

type Model = Error | {message: string}
export class ResetPasswordController extends Controller {
  constructor (private readonly resetPassword: ResetPassword) { super() }

  async perform ({ id }: HttpRequest): Promise<HttpResponse<Model>> {
    try {
      await this.resetPassword({ id })
      return ok({ message: 'password reseted with success' })
    } catch (err: any) {
      return badRequest(err)
    }
  }

  override async buildValidators ({ id }: HttpRequest): Promise<Validator[]> {
    return [
      ...builder.of({ value: id, fieldName: 'id' }).required().build()
    ]
  }
}
