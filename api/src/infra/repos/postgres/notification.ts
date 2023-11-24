import { Notification } from '@/infra/repos/postgres/entities'
import { DeleteNotification, LoadNotifications, UpdateNotification, ShowNotification, InsertNotification } from '@/domain/contracts/repos'

import { PgRepository } from '@/infra/repos/postgres/repository'

type GetOutput = LoadNotifications.Output
type GetInput = LoadNotifications.Input
type ShowInput = ShowNotification.Input
type ShowOutput = ShowNotification.Output
type InsertInput = InsertNotification.Input
type InsertOutput = InsertNotification.Output
type UpdateInput = UpdateNotification.Input
type UpdateOutput = UpdateNotification.Output
type DeleteInput = DeleteNotification.Input
type DeleteOutput = DeleteNotification.Output

export class NotificationRepository extends PgRepository implements LoadNotifications, ShowNotification, UpdateNotification, DeleteNotification, InsertNotification {
  async get ({ user }: GetInput): Promise<GetOutput> {
    return await this.getRepository(Notification).find({ order: { id: 'ASC' }, relations: ['user', 'question', 'question.status'], where: { user: user } })
  }

  async show ({ id }: ShowInput): Promise<ShowOutput> {
    return await this.getRepository(Notification).findOne(id, { relations: ['user', 'question', 'question.status'] })
  }

  async insert (input: InsertInput): Promise<InsertOutput> {
    const { id } = await this.getRepository(Notification).save(input)
    return this.show({ id: id.toString() })
  }

  async update ({ id, ...data }: UpdateInput): Promise<UpdateOutput> {
    await this.getRepository(Notification).save(Object.assign({}, data, { id: parseInt(id) }))
    return this.show({ id })
  }

  async delete ({ id }: DeleteInput): Promise<DeleteOutput> {
    await this.getRepository(Notification).delete(id)
  }
}
