import { DeleteOption as Delete } from '@/domain/contracts/repos'

type Setup = (repo: Delete) => DeleteOption
type Input = { id: string }

export type DeleteOption = (input: Input) => Promise<void>

export const setupDeleteOption: Setup = (repo) => async input => {
  await repo.delete(input)
}
