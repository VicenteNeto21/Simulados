import { UpdateQuestion, setupUpdateQuestion } from '@/domain/usecases/question'
import { makeNotificationRepo, makeQuestionRepo, makeUserRepo } from '@/main/factories/infra/repos'

export const makeUpdateQuestion = (): UpdateQuestion => {
  return setupUpdateQuestion(
    makeQuestionRepo(),
    makeNotificationRepo(),
    makeUserRepo()
  )
}
