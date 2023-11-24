import { DeleteNotification as Delete } from '@/domain/contracts/repos'

type Setup = (repo: Delete) => DeleteNotification
type Input = { id: string }

export type DeleteNotification = (input: Input) => Promise<void>

export const setupDeleteNotification: Setup = (repo) => async input => {
  await repo.delete(input)
}
