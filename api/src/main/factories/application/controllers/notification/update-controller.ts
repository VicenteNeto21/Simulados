import { UpdateNotificationController } from '@/application/controllers/notification'
import { makeUpdateNotification } from '@/main/factories/domain/usecases/notification'

import { makeLogController } from '@/main/factories/application/decorators'
import { Controller } from '@/application/controllers'

export const makeUpdateNotificationController = (): Controller => {
  const controller = new UpdateNotificationController(makeUpdateNotification())
  return controller
}
