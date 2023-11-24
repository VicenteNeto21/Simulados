import { ListStatus as List } from '@/domain/contracts/repos/status'

type Setup = (repo: List) => ListStatus
type Output = List.Output

export type ListStatus = () => Promise<Output>

export const setupListStatus: Setup = (repo) => async () => {
  return await repo.get()
}
