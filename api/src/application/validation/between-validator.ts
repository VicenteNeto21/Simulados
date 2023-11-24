import { BetweenError } from '@/application/errors'

export class BetweenValidator {
  constructor (
    private readonly fieldName: string,
    private readonly value: string | number,
    private readonly min: number,
    private readonly max: number
  ) { }

  validate (): Error | undefined {
    if (this.fieldName === '' || this.fieldName === undefined || this.fieldName === null || this.value === undefined || this.value === null || this.min === undefined || this.min === null || this.max === undefined || this.max === null || this.min >= this.max) return new Error('BetweenValidator fields error')
    if (typeof this.value === 'string' && (this.value.length < this.min || this.value.length > this.max)) return new BetweenError(this.fieldName, this.min, this.max)
    if (typeof this.value === 'number' && (this.value < this.min || this.value > this.max)) return new BetweenError(this.fieldName, this.min, this.max, true)
  }
}
