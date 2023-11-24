import { UpdateUserController } from '@/application/controllers/user'
import { makeUpdateUser } from '@/main/factories/domain/usecases/user'

import { Controller } from '@/application/controllers'

export const makeUpdateUserController = (): Controller => {
  const controller = new UpdateUserController(makeUpdateUser())
  return controller
}
