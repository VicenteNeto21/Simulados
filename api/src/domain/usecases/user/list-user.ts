import { LoadUsers } from '@/domain/contracts/repos/user'

type Setup = (userRepo: LoadUsers) => ListUsers
type Input = LoadUsers.Input
type Output = LoadUsers.Output

export type ListUsers = (input: Input) => Promise<Output>

export const setupListUsers: Setup = (userRepo) => async (input) => {
  return await userRepo.get(input)
}
