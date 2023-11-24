import { ShowNotificationController } from '@/application/controllers/notification'
import { makeShowNotification } from '@/main/factories/domain/usecases/notification'

import { makeLogController } from '@/main/factories/application/decorators'
import { Controller } from '@/application/controllers'

export const makeShowNotificationController = (): Controller => {
  const controller = new ShowNotificationController(makeShowNotification())
  return controller
}
