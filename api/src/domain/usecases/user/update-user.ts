import { ContentNotFound } from '@/application/errors'
import { Encrypter } from '@/domain/contracts/gateways'
import { UpdateUser as Save, User } from '@/domain/contracts/repos'
import { FilesInput } from '@/domain/entities'
import { fileManager } from '@/domain/helpers/save'

type Setup = (userRepo: Save, encrypter: Encrypter) => UpdateUser
type Input = Save.Input
type Output = User

export type UpdateUser = (input: Input) => Promise<Output>

export const setupUpdateUser: Setup = (userRepo, encrypter) => async input => {
  const data: Input = input
  let hashedPassword = null as any
  if (data.password != null) {
    hashedPassword = await encrypter.encrypt(data.password as any)
  }
  const user = await userRepo.update(Object.assign({}, data, { password: hashedPassword ?? data.password }))
  if (user !== undefined) return user
  throw new ContentNotFound('user')
}
