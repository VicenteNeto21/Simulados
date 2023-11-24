import { TokenGenerator } from '@/domain/contracts/gateways'
import { AccessToken, LoginUser as Login } from '@/domain/entities'

type Setup = (login: Login, token: TokenGenerator) => AuthenticateUser
type Input = { email: string, password: string }
type Output = { accessToken: string, id: string }

export type AuthenticateUser = (input: Input) => Promise<Output>

export const setupLogin: Setup = (login, token) => async input => {
  const { id } = await login(input)
  const accessToken = await token.generate({ key: id, expirationInMs: AccessToken.expirationInMs })
  return { accessToken, id }
}
