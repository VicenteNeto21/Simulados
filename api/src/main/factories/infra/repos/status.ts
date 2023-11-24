import { StatusRepository } from '@/infra/repos/postgres/status'

export const makeStatusRepo = (): StatusRepository => {
  return new StatusRepository()
}
