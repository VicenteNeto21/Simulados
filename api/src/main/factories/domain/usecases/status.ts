import { ListStatus, setupListStatus } from '@/domain/usecases/status'
import { makeStatusRepo } from '@/main/factories/infra/repos'

export const makeGetStatus = (): ListStatus => {
  return setupListStatus(
    makeStatusRepo()
  )
}
