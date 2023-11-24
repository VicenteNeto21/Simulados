import { InsertErrorLog as Save } from '@/domain/contracts/repos'

type Setup = (logRepo: Save) => InsertErrorLog
type Input = Save.Input

export type InsertErrorLog = (input: Input) => Promise<void>

export const setupInsertErrorLog: Setup = (logRepo) => async input => {
  await logRepo.insert(input)
}
