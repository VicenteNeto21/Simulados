import { ValidationBuilder as builder, Validator } from '@/application/validation'
import { HttpResponse, ok, contentNotFound } from '@/application/helpers'
import { Controller } from '@/application/controllers'
import { ListUser } from '@/domain/usecases/user'
import { User } from '@/domain/contracts/repos'

type HttpRequest = { id: string }

type Model = Error | User
export class ShowUserController extends Controller {
  constructor (private readonly showUser: ListUser) {
    super()
  }

  async perform ({ id }: HttpRequest): Promise<HttpResponse<Model>> {
    try {
      const user = await this.showUser({ id })
      return ok(user)
    } catch {
      return contentNotFound('user')
    }
  }

  override async buildValidators ({ id }: HttpRequest): Promise<Validator[]> {
    return [
      ...builder.of({ value: id, fieldName: 'id' }).required().build()
    ]
  }
}
