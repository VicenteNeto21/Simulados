import { HttpResponse, ok, badRequest } from '@/application/helpers'
import { Controller } from '@/application/controllers'
import { ListLog } from '@/domain/usecases/log'
import { Log } from '@/domain/contracts/repos'

type Model = Error | Log[]
export class GetLogController extends Controller {
  constructor (private readonly listLog: ListLog) {
    super()
  }

  async perform (): Promise<HttpResponse<Model>> {
    try {
      const log = await this.listLog()
      return ok(log)
    } catch (error: any) {
      return badRequest(error)
    }
  }
}
