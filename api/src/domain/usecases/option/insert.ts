import { ContentNotFound } from '@/application/errors'
import { InsertOption as Save, Option } from '@/domain/contracts/repos'

type Setup = (repo: Save) => InsertOption
type Input = Save.Input
type Output = Option

export type InsertOption = (input: Input) => Promise<Output>

export const setupInsertOption: Setup = (repo) => async input => {
  const option = await repo.insert(input)
  if (option !== undefined) return option
  throw new ContentNotFound('option')
}
