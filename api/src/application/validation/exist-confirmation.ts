import { Validator } from '@/application/validation'
import { ContentNotFound, InvalidRepositoryError, InvalidRepositoryIdError } from '@/application/errors'
import { EntityTarget, getRepository } from 'typeorm'

export class ExistConfirmationValidator implements Validator {
  constructor (
    private readonly repository: EntityTarget<any>,
    private readonly object: string | number | { id: string | number },
    private readonly title?: string
  ) { }

  async validate (): Promise<Error | undefined> {
    if (this.repository === '' || this.repository === undefined || this.repository === null) {
      return new InvalidRepositoryError()
    }
    if (this.object === undefined || this.object === null) {
      return new InvalidRepositoryIdError()
    }

    let param = (typeof this.object === 'object')
      ? this.object.id
      : this.object

    if (typeof param === 'string') param = parseInt(param)

    const pgRepository = await getRepository(this.repository).findOne(param)

    if (pgRepository === undefined) {
      return new ContentNotFound(this.title)
    }
  }
}
