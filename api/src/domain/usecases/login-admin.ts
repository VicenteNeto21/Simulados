import { TokenGenerator } from '@/domain/contracts/gateways'
import { AccessToken, LoginUser as Login } from '@/domain/entities'
import { PermissionError } from '@/domain/entities/errors'

type Setup = (login: Login, token: TokenGenerator) => AuthenticateUserAdmin
type Input = { email: string, password: string }
type Output = { accessToken: string }

export type AuthenticateUserAdmin = (input: Input) => Promise<Output>

export const setupLoginAdmin: Setup = (login, token) => async input => {
  const { id, admin } = await login(input)
  if (!admin) throw new PermissionError()
  const accessToken = await token.generate({ key: id, expirationInMs: AccessToken.expirationInMs })
  return { accessToken }
}
