import { GetNotificationController } from '@/application/controllers/notification'
import { makeGetNotification } from '@/main/factories/domain/usecases/notification'

import { makeLogController } from '@/main/factories/application/decorators'
import { Controller } from '@/application/controllers'

export const makeGetNotificationController = (): Controller => {
  const controller = new GetNotificationController(makeGetNotification())
  return controller
}
