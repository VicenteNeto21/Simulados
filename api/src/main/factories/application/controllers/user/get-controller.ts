import { GetUserController } from '@/application/controllers/user'
import { makeGetUser } from '@/main/factories/domain/usecases/user'

import { makeLogController } from '@/main/factories/application/decorators'
import { Controller } from '@/application/controllers'

export const makeGetUserController = (): Controller => {
  const controller = new GetUserController(makeGetUser())
  return controller
}
