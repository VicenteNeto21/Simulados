import { HttpResponse, ok, badRequest } from '@/application/helpers'
import { Controller } from '@/application/controllers'
import { ListErrorLog } from '@/domain/usecases/error-log'
import { ErrorLog } from '@/domain/contracts/repos'

type Model = Error | ErrorLog[]
export class GetErrorLogController extends Controller {
  constructor (private readonly listErrorLog: ListErrorLog) {
    super()
  }

  async perform (): Promise<HttpResponse<Model>> {
    try {
      const log = await this.listErrorLog()
      return ok(log)
    } catch (err: any) {
      return badRequest(err)
    }
  }
}
