import { Encrypter } from '@/domain/contracts/gateways'
import bcrypt from 'bcrypt'

export class BcryptHandler implements Encrypter {
  private readonly salt: number

  constructor (salt: number) {
    this.salt = salt
  }

  async encrypt (value: string): Promise<string> {
    const hash = await bcrypt.hash(value, this.salt)
    return hash
  }

  async compare (password: string, hashedPassword: string): Promise<boolean> {
    const compare = await bcrypt.compare(password, hashedPassword)
    return compare
  }
}
