import { ContentNotFound } from '@/application/errors'
import { ShowQuestion, Question } from '@/domain/contracts/repos'

type Setup = (repo: ShowQuestion) => ListQuestion
type Input = { id: string }
type Output = Question

export type ListQuestion = (input: Input) => Promise<Output>

export const setupShowQuestion: Setup = (repo) => async input => {
  const question = await repo.show(input)
  if (question !== undefined) return question
  throw new ContentNotFound('question')
}
