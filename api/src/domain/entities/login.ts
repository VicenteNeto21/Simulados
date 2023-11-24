import { Login, ShowUserByNickName, UpdateUser } from '@/domain/contracts/repos'
import { BcryptHandler as Encrypter } from '@/infra/gateways'
import { AuthenticationError } from '@/domain/entities/errors'

type Setup = (userRepo: ShowUserByNickName & UpdateUser, encrypter: Encrypter) => LoginUser
type Input = Login.Input
type Output = {id: string, email?: string}

export type LoginUser = (input: Input) => Promise<Output>

export const setupExecuteLogin: Setup = (userRepo, encrypter) => async ({ email, password }) => {
  const user = await userRepo.showByNickName({ email })
  if (user?.password !== undefined) {
    const compare = await encrypter.compare(password, user.password)
    if (compare) {
      const { id, email } = user
      return { id: id.toString(), email: email, name: user.name }
    }
  }
  throw new AuthenticationError()
}
