import { UpdateQuestionController } from '@/application/controllers/question'
import { makeUpdateQuestion } from '@/main/factories/domain/usecases/question'

import { makeLogController } from '@/main/factories/application/decorators'
import { Controller } from '@/application/controllers'

export const makeUpdateQuestionController = (): Controller => {
  const controller = new UpdateQuestionController(makeUpdateQuestion())
  return controller
}
