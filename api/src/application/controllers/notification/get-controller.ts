import { HttpResponse, ok, badRequest } from '@/application/helpers'
import { Controller } from '@/application/controllers'
import { ListNotifications } from '@/domain/usecases/notification'
import { Notification } from '@/domain/contracts/repos'

type Model = Error | Notification[]
type HttpRequest = Notification
export class GetNotificationController extends Controller {
  constructor (private readonly listNotifications: ListNotifications) {
    super()
  }

  async perform (input: HttpRequest): Promise<HttpResponse<Model>> {
    try {
      const notifications = await this.listNotifications(input)
      return ok(notifications)
    } catch (error: any) {
      return badRequest(error)
    }
  }
}
