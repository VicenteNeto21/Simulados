import { DeleteUser, setupDeleteUser } from '@/domain/usecases/user'
import { makeUserRepo } from '@/main/factories/infra/repos'

export const makeDeleteUser = (): DeleteUser => {
  return setupDeleteUser(
    makeUserRepo()
  )
}
