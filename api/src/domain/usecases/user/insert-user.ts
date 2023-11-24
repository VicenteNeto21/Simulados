import { ContentNotFound } from '@/application/errors'
import { Encrypter, TokenGenerator } from '@/domain/contracts/gateways'
import { InsertUser as Save, User } from '@/domain/contracts/repos'
import { AccessToken } from '@/domain/entities'

type Setup = (userRepo: Save, encrypter: Encrypter, token: TokenGenerator) => InsertUser
type Input = Save.Input
type Output = {user: User, accessToken: string }

export type InsertUser = (input: Input) => Promise<Output>

export const setupInsertUser: Setup = (userRepo, encrypter, token) => async input => {
  const hashedPassword = await encrypter.encrypt(input.password as any)
  const user = await userRepo.insert(Object.assign({}, input, { password: hashedPassword }))
  if (user === undefined) throw new ContentNotFound('user')
  const accessToken = await token.generate({ key: user.id.toString(), expirationInMs: AccessToken.expirationInMs })
  return { accessToken, user }
}
