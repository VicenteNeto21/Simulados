import { EmailInvalidError } from '@/application/errors'
import { EmailValidatorAdapter } from '@/application/validation'

export class EmailConfirmationValidator {
  constructor (
    private readonly email: string | { value: string, id: string }
  ) { }

  validate (): Error | undefined {
    const emailValidator = new EmailValidatorAdapter()
    if (this.email == null || this.email === undefined) {
      return new EmailInvalidError()
    }
    let emailVerify: typeof this.email
    if (typeof this.email === 'object') {
      emailVerify = this.email.value
    } else {
      emailVerify = this.email
    }
    const isValid = emailValidator.isValid(emailVerify)
    if (!isValid) {
      return new EmailInvalidError()
    }
  }
}
