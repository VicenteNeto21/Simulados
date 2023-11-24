import { PasswordConfirmationError } from '@/application/errors'

export class PasswordConfirmationValidator {
  constructor (
    private readonly password: string,
    private readonly passwordConfirmation: string
  ) { }

  validate (): Error | undefined {
    if (this.password !== this.passwordConfirmation) {
      return new PasswordConfirmationError()
    }
  }
}
