import { ListOptions, setupListOptions } from '@/domain/usecases/option'
import { makeOptionRepo } from '@/main/factories/infra/repos'

export const makeGetOption = (): ListOptions => {
  return setupListOptions(
    makeOptionRepo()
  )
}
