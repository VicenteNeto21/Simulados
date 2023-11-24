import { ErrorLogRepository } from '@/infra/repos/postgres'

export const makeErrorLogRepository = (): ErrorLogRepository => {
  return new ErrorLogRepository()
}
