import { ListLog, InsertLog } from '@/domain/contracts/repos'
import { Log } from '@/infra/repos/postgres/entities'
import { PgRepository } from '@/infra/repos/postgres/repository'

type GetOutput = ListLog.Output
type InsertInput = InsertLog.Input

export class LogRepository extends PgRepository implements InsertLog, ListLog {
  async get (): Promise<GetOutput> {
    return await this.getRepository(Log).find({ relations: ['user'], order: { createdAt: 'DESC' } })
  }

  async insert (input: InsertInput): Promise<void> {
    await this.getRepository(Log).save(input)
  }
}
