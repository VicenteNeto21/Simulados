import { UserAccountRepository } from '@/infra/repos/postgres'

export const makeAccountRepo = (): UserAccountRepository => {
  return new UserAccountRepository()
}
