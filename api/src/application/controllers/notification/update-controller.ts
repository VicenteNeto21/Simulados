import { ValidationBuilder as builder, Validator } from '@/application/validation'
import { HttpResponse, ok, badRequest } from '@/application/helpers'
import { Controller } from '@/application/controllers'
import { UpdateNotification } from '@/domain/usecases/notification'
import { UpdateNotification as Save, Notification as INotification } from '@/domain/contracts/repos'

type HttpRequest = Save.Input

type Model = Error | INotification
export class UpdateNotificationController extends Controller {
  constructor (private readonly updateNotification: UpdateNotification) {
    super()
  }

  async perform (input: HttpRequest): Promise<HttpResponse<Model>> {
    try {
      const notification = await this.updateNotification(input)
      return ok(notification)
    } catch (error: any) {
      return badRequest(error)
    }
  }

  override async buildValidators ({ answered, evaluation }: HttpRequest): Promise<Validator[]> {
    return [
      ...builder.of({ value: answered, fieldName: 'answered' }).sometimes().build(),
      ...builder.of({ value: evaluation, fieldName: 'evaluation' }).sometimes().build()

    ]
  }
}
