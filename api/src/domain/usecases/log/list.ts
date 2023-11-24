import { ListLog as List, Log } from '@/domain/contracts/repos'

type Setup = (logRepo: List) => ListLog
type Output = Log[]

export type ListLog = () => Promise<Output>

export const setupListLog: Setup = (logRepo) => async () => {
  return await logRepo.get()
}
