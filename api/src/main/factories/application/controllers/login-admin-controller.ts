import { LoginAdminController, Controller } from '@/application/controllers'
import { makeUserAdminAuthentication } from '@/main/factories/domain/usecases'
import { makeLogController } from '@/main/factories/application/decorators'

export const makeLoginAdminController = (): Controller => {
  const controller = new LoginAdminController(makeUserAdminAuthentication())
  return controller
}
