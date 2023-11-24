import { ShowUser } from '@/domain/contracts/repos'

type Setup = (userRepo: ShowUser) => LoggedUser
type Input = { id: string }
type Output = ShowUser.Output

export type LoggedUser = (input: Input) => Promise<Output>

export const setupLoggedUser: Setup = (userRepo) => async ({ id }) => {
  const user = userRepo.show({ id })
  if (user !== undefined) return user
}
