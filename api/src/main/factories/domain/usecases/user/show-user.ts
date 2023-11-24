import { ListUser, setupShowUser } from '@/domain/usecases/user'
import { makeUserRepo } from '@/main/factories/infra/repos'

export const makeShowUser = (): ListUser => {
  return setupShowUser(
    makeUserRepo()
  )
}
