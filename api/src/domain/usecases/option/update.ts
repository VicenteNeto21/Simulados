import { ContentNotFound } from '@/application/errors'
import { UpdateOption as Save, Option } from '@/domain/contracts/repos'

type Setup = (repo: Save) => UpdateOption
type Input = Save.Input
type Output = Option

export type UpdateOption = (input: Input) => Promise<Output>

export const setupUpdateOption: Setup = (repo) => async input => {
  const option = await repo.update(input)
  if (option !== undefined) return option
  throw new ContentNotFound('option')
}
