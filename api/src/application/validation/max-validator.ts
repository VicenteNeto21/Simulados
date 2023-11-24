import { MaxError } from '@/application/errors'

export class MaxValidator {
  constructor (
    private readonly fieldName: string,
    private readonly value: string | number,
    private readonly max: number
  ) { }

  validate (): Error | undefined {
    if (this.fieldName === '' || this.fieldName === undefined || this.fieldName === null || this.value === undefined || this.value === null || this.max === undefined || this.max === null || this.max === 0) return new Error('MaxValidator fields error')
    if (typeof this.value === 'string' && this.value.length > this.max) return new MaxError(this.fieldName, this.max)
    if (typeof this.value === 'number' && this.value > this.max) return new MaxError(this.fieldName, this.max, true)
  }
}
