import { GetQuestionController } from '@/application/controllers/question'
import { makeGetQuestion } from '@/main/factories/domain/usecases/question'

import { makeLogController } from '@/main/factories/application/decorators'
import { Controller } from '@/application/controllers'

export const makeGetQuestionController = (): Controller => {
  const controller = new GetQuestionController(makeGetQuestion())
  return controller
}
