import { InsertErrorLog, setupInsertErrorLog } from '@/domain/usecases/error-log'
import { makeErrorLogRepository } from '@/main/factories/infra/repos'

export const makeInsertErrorLog = (): InsertErrorLog => {
  return setupInsertErrorLog(
    makeErrorLogRepository()
  )
}
