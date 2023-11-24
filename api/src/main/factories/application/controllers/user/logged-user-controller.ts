import { LoggedUserController } from '@/application/controllers/user'
import { makeLoggedUser } from '@/main/factories/domain/usecases/user'

import { makeLogController } from '@/main/factories/application/decorators'
import { Controller } from '@/application/controllers'

export const makeLoggedUserController = (): Controller => {
  const controller = new LoggedUserController(makeLoggedUser())
  return controller
}
