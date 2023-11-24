import { GetOptionController } from '@/application/controllers/option'
import { makeGetOption } from '@/main/factories/domain/usecases/option'

import { makeLogController } from '@/main/factories/application/decorators'
import { Controller } from '@/application/controllers'

export const makeGetOptionController = (): Controller => {
  const controller = new GetOptionController(makeGetOption())
  return controller
}
