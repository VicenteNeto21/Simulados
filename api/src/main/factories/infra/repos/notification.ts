import { NotificationRepository } from '@/infra/repos/postgres'

export const makeNotificationRepo = (): NotificationRepository => {
  return new NotificationRepository()
}
