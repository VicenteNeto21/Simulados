import { ContentNotFound } from '@/application/errors'
import { InsertQuestion as Save, Question, LoadUsers, User, InsertNotification } from '@/domain/contracts/repos'
type Setup = (repo: Save, loadUsers: LoadUsers, saveNotification: InsertNotification) => InsertQuestion
type Input = Save.Input
type Output = Question

function compare (a: User, b: User): number {
  if (a.id < b.id) { return -1 }
  if (a.id > b.id) { return 1 }
  return 0
}

export type InsertQuestion = (input: Input) => Promise<Output>

export const setupInsertQuestion: Setup = (repo, loadUsers, saveNotification) => async input => {
  input.subject.id = Number(input.subject.id)
  console.log(input)
  const question = await repo.insert(input)
  if (question !== undefined) {
    const users = await loadUsers.get({ id: input.user.id })
    console.log(users)
    users.sort(compare)
    for (let i = 0; i < 5; i++) {
      await saveNotification.insert({ user: { id: users[i].id }, question: { id: question.id } })
    }
    return question
  }
  throw new ContentNotFound('question')
}
