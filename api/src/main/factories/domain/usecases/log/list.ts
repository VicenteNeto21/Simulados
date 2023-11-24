import { ListLog, setupListLog } from '@/domain/usecases/log'
import { makeLogRepository } from '@/main/factories/infra/repos'

export const makeListLog = (): ListLog => {
  return setupListLog(
    makeLogRepository()
  )
}
