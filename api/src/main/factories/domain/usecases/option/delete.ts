import { DeleteOption, setupDeleteOption } from '@/domain/usecases/option'
import { makeOptionRepo } from '@/main/factories/infra/repos'

export const makeDeleteOption = (): DeleteOption => {
  return setupDeleteOption(
    makeOptionRepo()
  )
}
