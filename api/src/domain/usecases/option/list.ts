import { LoadOptions } from '@/domain/contracts/repos'

type Setup = (repo: LoadOptions) => ListOptions
type Output = LoadOptions.Output

export type ListOptions = () => Promise<Output>

export const setupListOptions: Setup = (repo) => async () => {
  return await repo.get()
}
