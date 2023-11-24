import { UserRepository } from '@/infra/repos/postgres/user'

export const makeUserRepo = (): UserRepository => {
  return new UserRepository()
}
