import { ListNotification, setupShowNotification } from '@/domain/usecases/notification'
import { makeNotificationRepo } from '@/main/factories/infra/repos'

export const makeShowNotification = (): ListNotification => {
  return setupShowNotification(
    makeNotificationRepo()
  )
}
