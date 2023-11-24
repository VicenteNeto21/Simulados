import { LogRepository } from '@/infra/repos/postgres'

export const makeLogRepository = (): LogRepository => {
  return new LogRepository()
}
