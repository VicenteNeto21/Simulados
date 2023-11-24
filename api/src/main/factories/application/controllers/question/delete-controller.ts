import { DeleteQuestionController } from '@/application/controllers/question'
import { makeDeleteQuestion } from '@/main/factories/domain/usecases/question'

import { makeLogController } from '@/main/factories/application/decorators'
import { Controller } from '@/application/controllers'

export const makeDeleteQuestionController = (): Controller => {
  const controller = new DeleteQuestionController(makeDeleteQuestion())
  return controller
}
