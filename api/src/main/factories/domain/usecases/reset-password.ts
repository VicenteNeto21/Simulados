import { ResetPassword, setupResetPassword } from '@/domain/usecases'
import { makeBcryptHandler } from '@/main/factories/infra/gateways'
import { makeResetPassRepo } from '@/main/factories/infra/repos'

export const makeResetpassword = (): ResetPassword => {
  return setupResetPassword(
    makeResetPassRepo(),
    makeBcryptHandler()
  )
}
