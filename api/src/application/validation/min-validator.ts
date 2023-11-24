import { MinError } from '@/application/errors'

export class MinValidator {
  constructor (
    private readonly fieldName: string,
    private readonly value: string | number,
    private readonly min: number
  ) { }

  validate (): Error | undefined {
    if (this.fieldName === '' || this.fieldName === undefined || this.fieldName === null || this.value === undefined || this.value === null || this.min === undefined || this.min === null || this.min === 0) return new Error('MinValidator fields error')
    if (typeof this.value === 'string' && this.value.length < this.min) return new MinError(this.fieldName, this.min)
    if (typeof this.value === 'number' && this.value < this.min) return new MinError(this.fieldName, this.min, true)
  }
}
