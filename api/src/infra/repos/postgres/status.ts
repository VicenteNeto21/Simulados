import { Status } from '@/infra/repos/postgres/entities'
import { ListStatus } from '@/domain/contracts/repos'

import { PgRepository } from '@/infra/repos/postgres/repository'

type GetOutput = ListStatus.Output

export class StatusRepository extends PgRepository implements ListStatus {
  async get (): Promise<GetOutput> {
    return await this.getRepository(Status).find({ order: { id: 'ASC' } })
  }
}
