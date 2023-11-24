import { InsertLog as Save } from '@/domain/contracts/repos'

type Setup = (logRepo: Save) => InsertLog
type Input = Save.Input

export type InsertLog = (input: Input) => Promise<void>

export const setupInsertLog: Setup = (logRepo) => async input => {
  await logRepo.insert(input)
}
