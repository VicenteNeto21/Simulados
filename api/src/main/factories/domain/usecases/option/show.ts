import { ListOption, setupShowOption } from '@/domain/usecases/option'
import { makeOptionRepo } from '@/main/factories/infra/repos'

export const makeShowOption = (): ListOption => {
  return setupShowOption(
    makeOptionRepo()
  )
}
