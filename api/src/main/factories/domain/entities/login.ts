import { LoginUser, setupExecuteLogin } from '@/domain/entities'
import { makeBcryptHandler } from '@/main/factories/infra/gateways'
import { makeUserRepo } from '@/main/factories/infra/repos'

export const makeLoginUser = (): LoginUser => {
  return setupExecuteLogin(
    makeUserRepo(),
    makeBcryptHandler()
  )
}
