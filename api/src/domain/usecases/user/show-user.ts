import { ContentNotFound } from '@/application/errors'
import { ShowUser, User } from '@/domain/contracts/repos'

type Setup = (userRepo: ShowUser) => ListUser
type Input = { id: string }
type Output = User

export type ListUser = (input: Input) => Promise<Output>

export const setupShowUser: Setup = (userRepo) => async input => {
  const user = await userRepo.show(input)
  if (user !== undefined) return user
  throw new ContentNotFound('user')
}
