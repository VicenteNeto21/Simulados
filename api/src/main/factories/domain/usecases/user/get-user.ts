import { ListUsers, setupListUsers } from '@/domain/usecases/user'
import { makeUserRepo } from '@/main/factories/infra/repos'

export const makeGetUser = (): ListUsers => {
  return setupListUsers(
    makeUserRepo()
  )
}
