import { DeleteUserController } from '@/application/controllers/user'
import { makeDeleteUser } from '@/main/factories/domain/usecases/user'

import { Controller } from '@/application/controllers'

export const makeDeleteUserController = (): Controller => {
  const controller = new DeleteUserController(makeDeleteUser())
  return controller
}
