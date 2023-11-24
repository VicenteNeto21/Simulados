import { Validator } from '@/application/validation'
import { InvalidRepositoryError, InvalidRepositoryIdError, UniqueError } from '@/application/errors'
import { EntityTarget, getRepository } from 'typeorm'

export class UniqueValidator implements Validator {
  constructor (
    private readonly repository: EntityTarget<any>,
    private readonly value: string | number | { value: string | number, id: string },
    private readonly fieldName: string
  ) { }

  async validate (): Promise<Error | undefined> {
    if (this.repository === '' || this.repository === undefined || this.repository === null) {
      return new InvalidRepositoryError()
    }
    if (this.value === undefined || this.value === null) {
      return new InvalidRepositoryIdError()
    }
    let pgRepository
    let value: typeof this.value
    if (typeof this.value === 'object') {
      value = this.value.value
      pgRepository = await getRepository(this.repository).createQueryBuilder('repo')
        .where(`repo.${this.fieldName} = :value`, { value: `${value}` })
        .andWhere('repo.id != :id', { id: `${this.value.id}` })
        .getCount()
    } else {
      value = this.value
      pgRepository = await getRepository(this.repository).createQueryBuilder('repo')
        .where(`repo.${this.fieldName} = :value`, { value: `${value}` })
        .getCount()
    }
    if (pgRepository > 0) {
      return new UniqueError(this.fieldName, value)
    }
  }
}
