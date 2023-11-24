import { InsertOptionController } from '@/application/controllers/option'
import { makeInsertOption } from '@/main/factories/domain/usecases/option'

import { makeLogController } from '@/main/factories/application/decorators'
import { Controller } from '@/application/controllers'

export const makeInsertOptionController = (): Controller => {
  const controller = new InsertOptionController(makeInsertOption())
  return controller
}
