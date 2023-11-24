import { UpdateOptionController } from '@/application/controllers/option'
import { makeUpdateOption } from '@/main/factories/domain/usecases/option'

import { makeLogController } from '@/main/factories/application/decorators'
import { Controller } from '@/application/controllers'

export const makeUpdateOptionController = (): Controller => {
  const controller = new UpdateOptionController(makeUpdateOption())
  return controller
}
