import { AuthenticateUserAdmin, setupLoginAdmin } from '@/domain/usecases'
import { makeJwtTokenHandler } from '@/main/factories/infra/gateways'
import { makeLoginUser } from '@/main/factories/domain/entities'

export const makeUserAdminAuthentication = (): AuthenticateUserAdmin => {
  return setupLoginAdmin(
    makeLoginUser(),
    makeJwtTokenHandler()
  )
}
