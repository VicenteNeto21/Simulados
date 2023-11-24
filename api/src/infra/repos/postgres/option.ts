import { Option } from '@/infra/repos/postgres/entities'
import { DeleteOption, LoadOptions, UpdateOption, ShowOption, InsertOption } from '@/domain/contracts/repos'

import { PgRepository } from '@/infra/repos/postgres/repository'

type GetOutput = LoadOptions.Output
type ShowInput = ShowOption.Input
type ShowOutput = ShowOption.Output
type InsertInput = InsertOption.Input
type InsertOutput = InsertOption.Output
type UpdateInput = UpdateOption.Input
type UpdateOutput = UpdateOption.Output
type DeleteInput = DeleteOption.Input
type DeleteOutput = DeleteOption.Output

export class OptionRepository extends PgRepository implements LoadOptions, ShowOption, UpdateOption, DeleteOption, InsertOption {
  async get (): Promise<GetOutput> {
    return await this.getRepository(Option).find({ order: { option: 'ASC' }, relations: ['question', 'question.status'] })
  }

  async show ({ id }: ShowInput): Promise<ShowOutput> {
    return await this.getRepository(Option).findOne(id, { relations: ['question', 'question.status'] })
  }

  async insert (input: InsertInput): Promise<InsertOutput> {
    const { id } = await this.getRepository(Option).save(input)
    return this.show({ id: id.toString() })
  }

  async update ({ id, ...data }: UpdateInput): Promise<UpdateOutput> {
    await this.getRepository(Option).save(Object.assign({}, data, { id: parseInt(id) }))
    return this.show({ id })
  }

  async delete ({ id }: DeleteInput): Promise<DeleteOutput> {
    await this.getRepository(Option).delete(id)
  }
}
