import { User } from '@/infra/repos/postgres/entities'
import { ResetPassword } from '@/domain/contracts/gateways'
import { PgRepository } from '@/infra/repos/postgres/repository'

type ResetInput = ResetPassword.Input

export class ResetPasswordRepository extends PgRepository implements ResetPassword {
  async resetPassword ({ id, hashedPassword }: ResetInput): Promise<void> {
    await this.getRepository(User).update({ id: parseInt(id) }, { password: hashedPassword })
  }
}
