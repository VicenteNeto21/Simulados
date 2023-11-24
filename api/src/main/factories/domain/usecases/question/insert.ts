import { InsertQuestion, setupInsertQuestion } from '@/domain/usecases/question'
import { makeNotificationRepo, makeQuestionRepo, makeUserRepo } from '@/main/factories/infra/repos'

export const makeInsertQuestion = (): InsertQuestion => {
  return setupInsertQuestion(
    makeQuestionRepo(),
    makeUserRepo(),
    makeNotificationRepo()
  )
}
