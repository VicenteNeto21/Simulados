import { Controller } from '@/application/controllers'
import { HttpResponse } from '@/application/helpers'
import { Validator } from '@/application/validation'
import { InsertLog } from '@/domain/usecases/log'
import { InsertErrorLog } from '@/domain/usecases/error-log'

export class LogController extends Controller {
  constructor (
    private readonly decoratee: Controller,
    private readonly log: InsertLog,
    private readonly logError: InsertErrorLog
  ) {
    super()
  }

  async perform (httpRequest: any): Promise<HttpResponse> {
    try {
      const httpResponse = await this.decoratee.perform(httpRequest)
      const { authUserId, id } = httpRequest
      if (authUserId !== undefined) {
        const type = Object.keys(this.decoratee).map(k => String(k))[0]
        const message = `user: ${String(authUserId)} - origin: ${type} - id: ${String(id ?? 'none')} `
        await this.log({ message, origin: id ?? 'list', type, user: { id: authUserId } })
      }
      return httpResponse
    } catch (error: any) {
      await this.logError({ message: error })
      throw error
    }
  }

  override async buildValidators (httpRequest: any): Promise<Validator[]> {
    return this.decoratee.buildValidators(httpRequest)
  }
}
