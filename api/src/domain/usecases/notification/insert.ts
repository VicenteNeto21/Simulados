import { ContentNotFound } from '@/application/errors'
import { InsertNotification as Save, Notification } from '@/domain/contracts/repos'

type Setup = (repo: Save) => InsertNotification
type Input = Save.Input
type Output = Notification

export type InsertNotification = (input: Input) => Promise<Output>

export const setupInsertNotification: Setup = (repo) => async input => {
  const notification = await repo.insert(input)
  if (notification !== undefined) return notification
  throw new ContentNotFound('notification')
}
