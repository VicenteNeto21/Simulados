import { ListNotifications, setupListNotifications } from '@/domain/usecases/notification'
import { makeNotificationRepo } from '@/main/factories/infra/repos'

export const makeGetNotification = (): ListNotifications => {
  return setupListNotifications(
    makeNotificationRepo()
  )
}
