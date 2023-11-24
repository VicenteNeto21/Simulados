import { DeleteNotification, setupDeleteNotification } from '@/domain/usecases/notification'
import { makeNotificationRepo } from '@/main/factories/infra/repos'

export const makeDeleteNotification = (): DeleteNotification => {
  return setupDeleteNotification(
    makeNotificationRepo()
  )
}
