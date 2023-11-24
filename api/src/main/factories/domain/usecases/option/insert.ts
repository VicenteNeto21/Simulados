import { InsertOption, setupInsertOption } from '@/domain/usecases/option'
import { makeOptionRepo } from '@/main/factories/infra/repos'

export const makeInsertOption = (): InsertOption => {
  return setupInsertOption(
    makeOptionRepo()
  )
}
