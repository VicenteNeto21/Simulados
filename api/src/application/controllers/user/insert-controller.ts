import { ValidationBuilder as builder, Validator } from '@/application/validation'
import { HttpResponse, badRequest, created } from '@/application/helpers'
import { Controller } from '@/application/controllers'
import { InsertUser } from '@/domain/usecases/user'

import { InsertUser as Save, User as IUser } from '@/domain/contracts/repos'
import { User } from '@/infra/repos/postgres/entities'

type HttpRequest = Save.Input & { passwordConfirmation: string }

type Model = Error | {user: IUser, accessToken: string}
export class InsertUserController extends Controller {
  constructor (private readonly insertUser: InsertUser) {
    super()
  }

  // Método responsável por chamar a função do caso de uso de criar usuário

  async perform (httpRequest: Save.Input): Promise<HttpResponse<Model>> {
    try {
      const user = await this.insertUser(httpRequest)
      return created(user)
    } catch (error: any) {
      return badRequest(new Error(error.message))
    }
  }

  // Método responsável por validar os campos

  override async buildValidators ({ name, email, password, passwordConfirmation }: HttpRequest): Promise<Validator[]> {
    return [
      ...builder.of({ value: password, fieldName: 'password' }).required().between(8, 20).password(passwordConfirmation).build(),
      ...builder.of({ value: name, fieldName: 'name' }).required().build(),
      ...(await builder.of({ value: email, fieldName: 'email' }).required().unique(User)).build()
    ]
  }
}
