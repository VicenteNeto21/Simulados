import { InsertQuestionController } from '@/application/controllers/question'
import { makeInsertQuestion } from '@/main/factories/domain/usecases/question'

import { makeLogController } from '@/main/factories/application/decorators'
import { Controller } from '@/application/controllers'

export const makeInsertQuestionController = (): Controller => {
  const controller = new InsertQuestionController(makeInsertQuestion())
  return controller
}
