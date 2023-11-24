import { InsertNotification, setupInsertNotification } from '@/domain/usecases/notification'
import { makeNotificationRepo } from '@/main/factories/infra/repos'

export const makeInsertNotification = (): InsertNotification => {
  return setupInsertNotification(
    makeNotificationRepo()
  )
}
