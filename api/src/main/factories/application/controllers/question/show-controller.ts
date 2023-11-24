import { ShowQuestionController } from '@/application/controllers/question'
import { makeShowQuestion } from '@/main/factories/domain/usecases/question'

import { makeLogController } from '@/main/factories/application/decorators'
import { Controller } from '@/application/controllers'

export const makeShowQuestionController = (): Controller => {
  const controller = new ShowQuestionController(makeShowQuestion())
  return controller
}
