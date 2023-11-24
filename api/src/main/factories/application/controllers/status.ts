import { GetStatusController } from '@/application/controllers/status'
import { makeGetStatus } from '@/main/factories/domain/usecases/status'

import { makeLogController } from '@/main/factories/application/decorators'
import { Controller } from '@/application/controllers'

export const makeGetStatusController = (): Controller => {
  const controller = new GetStatusController(makeGetStatus())
  return controller
}
