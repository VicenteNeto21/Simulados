import { LoadQuestions } from '@/domain/contracts/repos'

type Setup = (repo: LoadQuestions) => ListQuestions
type Output = LoadQuestions.Output

export type ListQuestions = () => Promise<Output>

export const setupListQuestions: Setup = (repo) => async () => {
  const questions = await repo.get()
  return questions
}
