import { UpdateUser, setupUpdateUser } from '@/domain/usecases/user'
import { makeBcryptHandler } from '@/main/factories/infra/gateways'
import { makeUserRepo } from '@/main/factories/infra/repos'

export const makeUpdateUser = (): UpdateUser => {
  return setupUpdateUser(
    makeUserRepo(),
    makeBcryptHandler()
  )
}
