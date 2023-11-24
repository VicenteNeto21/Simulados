import { ShowUserController } from '@/application/controllers/user'
import { makeShowUser } from '@/main/factories/domain/usecases/user'

import { Controller } from '@/application/controllers'

export const makeShowUserController = (): Controller => {
  const controller = new ShowUserController(makeShowUser())
  return controller
}
