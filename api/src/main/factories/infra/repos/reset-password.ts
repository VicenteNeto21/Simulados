import { ResetPasswordRepository } from '@/infra/repos/postgres/reset-password'

export const makeResetPassRepo = (): ResetPasswordRepository => {
  return new ResetPasswordRepository()
}
