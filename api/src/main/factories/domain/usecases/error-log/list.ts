import { ListErrorLog, setupListErrorLog } from '@/domain/usecases/error-log'
import { makeErrorLogRepository } from '@/main/factories/infra/repos'

export const makeListLogError = (): ListErrorLog => {
  return setupListErrorLog(
    makeErrorLogRepository()
  )
}
