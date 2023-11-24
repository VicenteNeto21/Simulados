import { GetLogController } from '@/application/controllers/log'
import { makeListLog } from '@/main/factories/domain/usecases/log'
import { makeLogController } from '@/main/factories/application/decorators'
import { Controller } from '@/application/controllers'

export const makeGetLogController = (): Controller => {
  const controller = new GetLogController(makeListLog())
  return controller
}
