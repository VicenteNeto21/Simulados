import { ContentNotFound } from '@/application/errors'
import { ShowOption, Option } from '@/domain/contracts/repos'

type Setup = (repo: ShowOption) => ListOption
type Input = { id: string }
type Output = Option

export type ListOption = (input: Input) => Promise<Output>

export const setupShowOption: Setup = (repo) => async input => {
  const option = await repo.show(input)
  if (option !== undefined) return option
  throw new ContentNotFound('option')
}
