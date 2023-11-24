import { ContentNotFound } from '@/application/errors'
import { UpdateNotification as Save, Notification } from '@/domain/contracts/repos'

type Setup = (repo: Save) => UpdateNotification
type Input = Save.Input
type Output = Notification

export type UpdateNotification = (input: Input) => Promise<Output>

export const setupUpdateNotification: Setup = (repo) => async input => {
  const notification = await repo.update(input)
  if (notification !== undefined) return notification
  throw new ContentNotFound('notification')
}
