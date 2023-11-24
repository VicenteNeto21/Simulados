import { InsertLog, setupInsertLog } from '@/domain/usecases/log'
import { makeLogRepository } from '@/main/factories/infra/repos'

export const makeInsertLog = (): InsertLog => {
  return setupInsertLog(
    makeLogRepository()
  )
}
