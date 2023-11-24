import { ValidationBuilder as builder, Validator } from '@/application/validation'
import { HttpResponse, badRequest, noContent } from '@/application/helpers'
import { Controller } from '@/application/controllers'
import { DeleteOption } from '@/domain/usecases/option'

type HttpRequest = { id: string }

type Model = Error | any
export class DeleteOptionController extends Controller {
  constructor (private readonly deleteOption: DeleteOption) {
    super()
  }

  async perform ({ id }: HttpRequest): Promise<HttpResponse<Model>> {
    try {
      await this.deleteOption({ id })
      return noContent()
    } catch (error: any) {
      return badRequest(new Error(error.message))
    }
  }

  override async buildValidators ({ id }: HttpRequest): Promise<Validator[]> {
    return [
      ...builder.of({ value: id, fieldName: 'id' }).required().build()
    ]
  }
}
