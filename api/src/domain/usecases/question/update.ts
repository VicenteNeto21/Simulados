import { ContentNotFound } from '@/application/errors'
import { UpdateQuestion as Save, ShowQuestion as Show, Question, DeleteNotification, Notification, LoadUsers, InsertNotification, User } from '@/domain/contracts/repos'

type Setup = (repo: Save & Show, notificationRepo: DeleteNotification & InsertNotification, loadUsers: LoadUsers) => UpdateQuestion
type Input = Save.Input
type Output = Question

function compare (a: User, b: User): number {
  if (a.id < b.id) { return -1 }
  if (a.id > b.id) { return 1 }
  return 0
}

export type UpdateQuestion = (input: Input) => Promise<Output>

export const setupUpdateQuestion: Setup = (repo, notificationRepo, loadUsers) => async input => {
  if (input.denunciation !== undefined) {
    const question = await repo.update(input)
    if (question === undefined) throw new ContentNotFound('question')
    return question
  }
  if (input.statement === undefined && input.status !== undefined && input.user === undefined) {
    const question = await repo.update({ id: input.id, status: input.status })
    if (question === undefined) throw new ContentNotFound('question')
    return question
  }
  const question = await repo.show({ id: input.id })
  if (input.statement === undefined && input.status === undefined && input.user === undefined) {
    const notificationAnswerers: Notification[] = []
    if (question?.notifications !== undefined) {
      for (const notification of question?.notifications) {
        if (notification.answered === true) {
          notificationAnswerers.push(notification)
        }
      }
    }
    if (notificationAnswerers !== undefined && notificationAnswerers?.length === 5) {
      let approved = true
      notificationAnswerers.map(async notificationAnswered => {
        if (notificationAnswered?.evaluation === false) approved = false
      })
      notificationAnswerers.map(async notification => await notificationRepo.delete({ id: notification.id.toString() }))
      const questionSet = await repo.update(Object.assign({}, input, { status: { id: approved ? 2 : 3 } }))
      if (questionSet !== undefined) return questionSet
      throw new ContentNotFound('question')
    }
    return question
  } else {
    const question = await repo.update(input)
    if (question !== undefined) {
      const users = await loadUsers.get({ id: input.user!.id })
      users.sort(compare)
      for (let i = 0; i < 5; i++) {
        await notificationRepo.insert({ user: { id: users[i].id }, question: { id: question.id } })
      }
      return question
    }
    throw new ContentNotFound('question')
  }
}
