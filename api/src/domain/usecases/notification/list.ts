import { LoadNotifications } from '@/domain/contracts/repos'

type Setup = (repo: LoadNotifications) => ListNotifications
type Input = LoadNotifications.Input
type Output = LoadNotifications.Output

export type ListNotifications = (input: Input) => Promise<Output>

export const setupListNotifications: Setup = (repo) => async (input) => {
  return await repo.get(input)
}
