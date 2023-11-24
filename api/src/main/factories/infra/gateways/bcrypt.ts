import { BcryptHandler } from '@/infra/gateways'

export const makeBcryptHandler = (): BcryptHandler => {
  const salt = 12
  return new BcryptHandler(salt)
}
