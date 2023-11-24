export class RequiredFieldError extends Error {
  constructor (fieldName?: string) {
    const message = fieldName === undefined
      ? 'Field required'
      : `The field ${fieldName} is required`
    super(message)
    this.name = 'RequiredFieldError'
  }
}

export class InvalidMimeTypeError extends Error {
  constructor (allowed: string[]) {
    super(`Unsupported type. Allowed types: ${allowed.join(', ')}`)
    this.name = 'InvalidMimeTypeError'
  }
}
export class MaxFileSizeError extends Error {
  constructor (maxSizeInMb: number) {
    super(`File upload limit is ${maxSizeInMb}MB`)
    this.name = 'MaxFileSizeError'
  }
}

export class PasswordConfirmationError extends Error {
  constructor () {
    super('The password given does not match')
    this.name = 'PasswordConfirmationError'
  }
}

export class EmailInvalidError extends Error {
  constructor () {
    super('The email given is not valid')
    this.name = 'EmailInvalidError'
  }
}

export class InvalidRepositoryError extends Error {
  constructor () {
    super('The repository given is not valid')
    this.name = 'InvalidRepositoryError'
  }
}
export class InvalidRepositoryIdError extends Error {
  constructor () {
    super('The object given is not valid')
    this.name = 'InvalidRepositoryIdError'
  }
}
export class ContentNotFound extends Error {
  constructor (fieldName?: string) {
    const message = fieldName === undefined
      ? 'Content not found'
      : `Not found any ${fieldName}`
    super(message)
    this.name = 'ContentNotFound'
  }
}

export class UniqueError extends Error {
  constructor (fieldName: string, value: string | number) {
    const message = `The ${fieldName} field is unique and the value ${value} already exists`
    super(message)
    this.name = 'UniqueError'
  }
}

export class MinError extends Error {
  constructor (fieldName: string, min: number, number: boolean = false) {
    const message = number
      ? `The ${fieldName} field must to be bigger or equal to ${min}`
      : `The ${fieldName} field must have at least ${min} characters`
    super(message)
    this.name = 'MinError'
  }
}

export class MaxError extends Error {
  constructor (fieldName: string, max: number, number: boolean = false) {
    const message = number
      ? `The ${fieldName} field must to be lower or equal to ${max}`
      : `The ${fieldName} field must have a maximum of ${max} characters`
    super(message)
    this.name = 'MaxError'
  }
}

export class BetweenError extends Error {
  constructor (fieldName: string, min: number, max: number, number: boolean = false) {
    const message = `The ${fieldName} field must be between ${min} and ${max}` + (number ? '' : ' characters')
    super(message)
    this.name = 'BetweenError'
  }
}
