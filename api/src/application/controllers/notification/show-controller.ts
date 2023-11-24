import { ValidationBuilder as builder, Validator } from '@/application/validation'
import { HttpResponse, ok, contentNotFound } from '@/application/helpers'
import { Controller } from '@/application/controllers'
import { ListNotification } from '@/domain/usecases/notification'
import { Notification } from '@/domain/contracts/repos'

type HttpRequest = { id: string }

type Model = Error | Notification
export class ShowNotificationController extends Controller {
  constructor (private readonly showNotification: ListNotification) {
    super()
  }

  async perform ({ id }: HttpRequest): Promise<HttpResponse<Model>> {
    try {
      const notification = await this.showNotification({ id })
      return ok(notification)
    } catch {
      return contentNotFound('notification')
    }
  }

  override async buildValidators ({ id }: HttpRequest): Promise<Validator[]> {
    return [
      ...builder.of({ value: id, fieldName: 'id' }).required().build()
    ]
  }
}
