import { UpdateNotification, setupUpdateNotification } from '@/domain/usecases/notification'
import { makeNotificationRepo } from '@/main/factories/infra/repos'

export const makeUpdateNotification = (): UpdateNotification => {
  return setupUpdateNotification(
    makeNotificationRepo()
  )
}
