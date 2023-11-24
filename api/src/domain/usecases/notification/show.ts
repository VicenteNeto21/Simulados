import { ContentNotFound } from '@/application/errors'
import { ShowNotification, Notification } from '@/domain/contracts/repos'

type Setup = (repo: ShowNotification) => ListNotification
type Input = { id: string }
type Output = Notification

export type ListNotification = (input: Input) => Promise<Output>

export const setupShowNotification: Setup = (repo) => async input => {
  const notification = await repo.show(input)
  if (notification !== undefined) return notification
  throw new ContentNotFound('notification')
}
