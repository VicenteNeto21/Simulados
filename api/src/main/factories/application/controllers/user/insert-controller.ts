import { InsertUserController } from '@/application/controllers/user'
import { makeInsertUser } from '@/main/factories/domain/usecases/user'

import { makeLogController } from '@/main/factories/application/decorators'
import { Controller } from '@/application/controllers'

export const makeInsertUserController = (): Controller => {
  const controller = new InsertUserController(makeInsertUser())
  return controller
}
