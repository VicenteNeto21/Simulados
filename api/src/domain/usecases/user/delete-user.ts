import { DeleteUser as Delete, UpdateUser } from '@/domain/contracts/repos'

type Setup = (userRepo: Delete & UpdateUser) => DeleteUser
type Input = { id: string }

export type DeleteUser = (input: Input) => Promise<void>

export const setupDeleteUser: Setup = (userRepo) => async input => {
  await userRepo.update({ id: input.id, games: [], notifications: [], questions: [], logs: [] })
  await userRepo.delete(input)
}
