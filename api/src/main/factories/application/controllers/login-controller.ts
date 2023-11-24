import { LoginController, Controller } from '@/application/controllers'
import { makeUserAuthentication } from '@/main/factories/domain/usecases'
import { makeLogController } from '@/main/factories/application/decorators'

export const makeLoginController = (): Controller => {
  const controller = new LoginController(makeUserAuthentication())
  return controller
}
