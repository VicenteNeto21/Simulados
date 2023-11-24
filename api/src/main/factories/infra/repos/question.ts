import { QuestionRepository } from '@/infra/repos/postgres'

export const makeQuestionRepo = (): QuestionRepository => {
  return new QuestionRepository()
}
