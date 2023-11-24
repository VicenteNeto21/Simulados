import { ValidationBuilder as builder, Validator } from '@/application/validation'
import { HttpResponse, ok, contentNotFound } from '@/application/helpers'
import { Controller } from '@/application/controllers'
import { ListOption } from '@/domain/usecases/option'
import { Option } from '@/domain/contracts/repos'

type HttpRequest = { id: string }

type Model = Error | Option
export class ShowOptionController extends Controller {
  constructor (private readonly showOption: ListOption) {
    super()
  }

  async perform ({ id }: HttpRequest): Promise<HttpResponse<Model>> {
    try {
      const option = await this.showOption({ id })
      return ok(option)
    } catch {
      return contentNotFound('option')
    }
  }

  override async buildValidators ({ id }: HttpRequest): Promise<Validator[]> {
    return [
      ...builder.of({ value: id, fieldName: 'id' }).required().build()
    ]
  }
}
