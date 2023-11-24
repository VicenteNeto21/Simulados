import { LoggedUser, setupLoggedUser } from '@/domain/usecases/user/logged-user'
import { makeUserRepo } from '@/main/factories/infra/repos'

export const makeLoggedUser = (): LoggedUser => {
  return setupLoggedUser(
    makeUserRepo()
  )
}
