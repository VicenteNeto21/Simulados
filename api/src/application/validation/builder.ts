import {
  RequiredBuffer, RequiredString, Required,
  PasswordConfirmationValidator,
  EmailConfirmationValidator,
  ExistConfirmationValidator,
  AllowedMimeTypes,
  Extension,
  MaxFileSize,
  Validator,
  UniqueValidator,
  MinValidator,
  MaxValidator,
  BetweenValidator
} from '@/application/validation'
import { EntityTarget } from 'typeorm'

export class ValidationBuilder {
  private constructor (
    private readonly value: any,
    private readonly fieldName?: string,
    private readonly validators: Validator[] = []
  ) { }

  static of (params: { value: any, fieldName?: string }): ValidationBuilder {
    return new ValidationBuilder(params.value, params.fieldName)
  }

  required (): ValidationBuilder {
    if (this.value instanceof Buffer) {
      this.validators.push(new RequiredBuffer(this.value, this.fieldName))
    } else if (typeof this.value === 'string') {
      this.validators.push(new RequiredString(this.value, this.fieldName))
    } else if (typeof this.value === 'number') {
      this.validators.push(new RequiredString(this.value.toString(), this.fieldName))
    } else if (typeof this.value === 'object') {
      this.validators.push(new Required(this.value, this.fieldName))
      if (this.value.buffer !== undefined) {
        this.validators.push(new RequiredBuffer(this.value.buffer, this.fieldName))
      }
    } else if (this.value === undefined) {
      this.validators.push(new RequiredString(this.value, this.fieldName))
    }
    return this
  }

  image ({ allowed, maxSizeInMb }: { allowed: Extension[], maxSizeInMb: number }): ValidationBuilder {
    if (this.value?.mimeType !== undefined) {
      this.validators.push(new AllowedMimeTypes(allowed, this.value.mimeType))
    }
    if (this.value?.buffer !== undefined) {
      this.validators.push(new MaxFileSize(maxSizeInMb, this.value.buffer))
    }
    return this
  }

  file ({ allowed, maxSizeInMb }: { allowed: Extension[], maxSizeInMb: number }): ValidationBuilder {
    if (this.value?.mimeType !== undefined) {
      this.validators.push(new AllowedMimeTypes(allowed, this.value.mimeType))
    }
    if (this.value?.buffer !== undefined) {
      this.validators.push(new MaxFileSize(maxSizeInMb, this.value.buffer))
    }
    return this
  }

  video ({ allowed, maxSizeInMb }: { allowed: Extension[], maxSizeInMb: number }): ValidationBuilder {
    if (this.value?.mimeType !== undefined) {
      this.validators.push(new AllowedMimeTypes(allowed, this.value.mimeType))
    }
    if (this.value?.buffer !== undefined) {
      this.validators.push(new MaxFileSize(maxSizeInMb, this.value.buffer))
    }
    return this
  }

  sometimes (): ValidationBuilder {
    if (this.value !== undefined) {
      this.required()
    }
    return this
  }

  async exists (repository: EntityTarget<any>): Promise<ValidationBuilder> {
    if (this.value !== undefined) {
      this.validators.push(new ExistConfirmationValidator(repository, this.value, this.fieldName))
    }
    return this
  }

  password (confirmation?: string): ValidationBuilder {
    if (this.value !== undefined) {
      this.validators.push(new PasswordConfirmationValidator(this.value, confirmation!))
    }
    return this
  }

  email (): ValidationBuilder {
    if (this.value !== undefined) {
      this.validators.push(new EmailConfirmationValidator(this.value))
    }
    return this
  }

  min (min: number): ValidationBuilder {
    if (this.value !== undefined) {
      this.validators.push(new MinValidator(this.fieldName!, this.value, min))
    }
    return this
  }

  max (max: number): ValidationBuilder {
    if (this.value !== undefined) {
      this.validators.push(new MaxValidator(this.fieldName!, this.value, max))
    }
    return this
  }

  between (min: number, max: number): ValidationBuilder {
    if (this.value !== undefined) {
      this.validators.push(new BetweenValidator(this.fieldName!, this.value, min, max))
    }
    return this
  }

  async unique (repository: EntityTarget<any>): Promise<ValidationBuilder> {
    if (this.value !== undefined && this.fieldName !== undefined) {
      this.validators.push(new UniqueValidator(repository, this.value, this.fieldName))
    }
    return this
  }

  build (): any {
    return this.validators
  }
}
