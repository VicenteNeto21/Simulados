import { ListErrorLog as List, Log } from '@/domain/contracts/repos'

type Setup = (logRepo: List) => ListErrorLog
type Output = Log[]

export type ListErrorLog = () => Promise<Output>

export const setupListErrorLog: Setup = (logRepo) => async () => {
  return await logRepo.get()
}
