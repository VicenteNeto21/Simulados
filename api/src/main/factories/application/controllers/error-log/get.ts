import { GetErrorLogController } from '@/application/controllers/error-log'
import { makeListLogError } from '@/main/factories/domain/usecases/error-log'
import { makeLogController } from '@/main/factories/application/decorators'
import { Controller } from '@/application/controllers'

export const makeGetErrorLogController = (): Controller => {
  const controller = new GetErrorLogController(makeListLogError())
  return controller
}
