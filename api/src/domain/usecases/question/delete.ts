import { DeleteQuestion as Delete } from '@/domain/contracts/repos'

type Setup = (repo: Delete) => DeleteQuestion
type Input = { id: string }

export type DeleteQuestion = (input: Input) => Promise<void>

export const setupDeleteQuestion: Setup = (repo) => async input => {
  await repo.delete(input)
}
