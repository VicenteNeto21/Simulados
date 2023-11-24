import { InsertErrorLog, ListErrorLog } from '@/domain/contracts/repos'
import { ErrorLog } from '@/infra/repos/postgres/entities'
import { PgRepository } from '@/infra/repos/postgres/repository'

type InsertInput = InsertErrorLog.Input
type GetOutput = ListErrorLog.Output

export class ErrorLogRepository extends PgRepository implements InsertErrorLog, ListErrorLog {
  async get (): Promise<GetOutput> {
    return await this.getRepository(ErrorLog).find({ order: { id: 'DESC' } })
  }

  async insert ({ message }: InsertInput): Promise<void> {
    const pgLogRepo = this.getRepository(ErrorLog)
    await pgLogRepo.save({ message })
  }
}
