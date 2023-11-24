import { ListQuestion, setupShowQuestion } from '@/domain/usecases/question'
import { makeQuestionRepo } from '@/main/factories/infra/repos'

export const makeShowQuestion = (): ListQuestion => {
  return setupShowQuestion(
    makeQuestionRepo()
  )
}
