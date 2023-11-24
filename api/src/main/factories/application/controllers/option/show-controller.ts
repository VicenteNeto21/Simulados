import { ShowOptionController } from '@/application/controllers/option'
import { makeShowOption } from '@/main/factories/domain/usecases/option'

import { makeLogController } from '@/main/factories/application/decorators'
import { Controller } from '@/application/controllers'

export const makeShowOptionController = (): Controller => {
  const controller = new ShowOptionController(makeShowOption())
  return controller
}
