import { HttpResponse, ok, badRequest } from '@/application/helpers'
import { Controller } from '@/application/controllers'
import { ListOptions } from '@/domain/usecases/option'
import { Option } from '@/domain/contracts/repos'

type Model = Error | Option[]
export class GetOptionController extends Controller {
  constructor (private readonly listOptions: ListOptions) {
    super()
  }

  async perform (): Promise<HttpResponse<Model>> {
    try {
      const options = await this.listOptions()
      return ok(options)
    } catch (error: any) {
      return badRequest(error)
    }
  }
}
