import { UpdateOption, setupUpdateOption } from '@/domain/usecases/option'
import { makeOptionRepo } from '@/main/factories/infra/repos'

export const makeUpdateOption = (): UpdateOption => {
  return setupUpdateOption(
    makeOptionRepo()
  )
}
