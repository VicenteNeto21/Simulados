import { DeleteQuestion, setupDeleteQuestion } from '@/domain/usecases/question'
import { makeQuestionRepo } from '@/main/factories/infra/repos'

export const makeDeleteQuestion = (): DeleteQuestion => {
  return setupDeleteQuestion(
    makeQuestionRepo()
  )
}
