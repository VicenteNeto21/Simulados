import { HttpResponse, ok, badRequest } from '@/application/helpers'
import { Controller } from '@/application/controllers'
import { ListStatus } from '@/domain/usecases/status'
import { Status } from '@/domain/contracts/repos'

type Model = Error | Status[]
export class GetStatusController extends Controller {
  constructor (private readonly listStatus: ListStatus) {
    super()
  }

  async perform (): Promise<HttpResponse<Model>> {
    try {
      const status = await this.listStatus()
      return ok(status)
    } catch (error: any) {
      return badRequest(error)
    }
  }
}
