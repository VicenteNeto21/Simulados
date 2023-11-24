import { Controller } from '@/application/controllers'
import { LogController } from '@/application/decorators'
import { makeInsertLog } from '@/main/factories/domain/usecases/log'
import { makeInsertErrorLog } from '@/main/factories/domain/usecases/error-log'

export const makeLogController = (controller: Controller): LogController => {
  return new LogController(
    controller,
    makeInsertLog(),
    makeInsertErrorLog()
  )
}
