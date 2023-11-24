import { DeleteOptionController } from '@/application/controllers/option'
import { makeDeleteOption } from '@/main/factories/domain/usecases/option'

import { makeLogController } from '@/main/factories/application/decorators'
import { Controller } from '@/application/controllers'

export const makeDeleteOptionController = (): Controller => {
  const controller = new DeleteOptionController(makeDeleteOption())
  return controller
}
