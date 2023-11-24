import { Question } from '.'

export type Status = {
  id: number
  status?: string
  questions?: Question[]
}

export interface ListStatus {
  get: () => Promise<ListStatus.Output>
}

export namespace ListStatus {
  export type Output = Status[]
}
