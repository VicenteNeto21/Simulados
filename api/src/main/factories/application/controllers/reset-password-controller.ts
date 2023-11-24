import { ResetPasswordController, Controller } from '@/application/controllers'
import { makeResetpassword } from '@/main/factories/domain/usecases'

import { makeLogController } from '@/main/factories/application/decorators'

export const makeResetPasswordController = (): Controller => {
  const controller = new ResetPasswordController(makeResetpassword())
  return controller
}
