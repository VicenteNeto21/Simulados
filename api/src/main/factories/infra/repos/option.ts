import { OptionRepository } from '@/infra/repos/postgres'

export const makeOptionRepo = (): OptionRepository => {
  return new OptionRepository()
}
