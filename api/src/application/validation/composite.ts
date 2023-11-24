import { Validator } from '@/application/validation'

export class ValidationComposite implements Validator {
  constructor (
    private readonly validators: undefined | Validator[]
  ) {}

  async validate (): Promise<Error |undefined> {
    for (const validator of this.validators!) {
      const error = await validator.validate()
      if (error !== undefined) {
        return error
      }
    }
  }
}
