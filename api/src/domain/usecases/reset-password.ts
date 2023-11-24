import { Encrypter, ResetPassword as ResetPass } from '@/domain/contracts/gateways'
import { env } from '@/main/config/env'

type Setup = (resetPassRepo: ResetPass, encrypter: Encrypter,) => ResetPassword
type Input = { id: string }

export type ResetPassword = (input: Input) => Promise<void>

export const setupResetPassword: Setup = (resetPassRepo, encrypter) => async ({ id }) => {
  const hashedPassword = await encrypter.encrypt(env.defaultPass)
  await resetPassRepo.resetPassword({ id, hashedPassword })
}
