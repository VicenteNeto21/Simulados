import { ListQuestions, setupListQuestions } from '@/domain/usecases/question'
import { makeQuestionRepo } from '@/main/factories/infra/repos'

export const makeGetQuestion = (): ListQuestions => {
  return setupListQuestions(
    makeQuestionRepo()
  )
}
