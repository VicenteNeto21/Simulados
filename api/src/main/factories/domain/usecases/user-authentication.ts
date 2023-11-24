import { AuthenticateUser, setupLogin } from '@/domain/usecases'
import { makeJwtTokenHandler } from '@/main/factories/infra/gateways'
import { makeLoginUser } from '@/main/factories/domain/entities'

export const makeUserAuthentication = (): AuthenticateUser => {
  return setupLogin(
    makeLoginUser(),
    makeJwtTokenHandler()
  )
}
