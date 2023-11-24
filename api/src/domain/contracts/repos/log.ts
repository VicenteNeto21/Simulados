import { User } from '.'

export type Log = {
  id: number
  message?: string
  origin?: string
  type?: string
  createdAt?: Date
  user?: User
}

export interface ListLog {
  get: () => Promise<ListLog.Output>
}

export namespace ListLog {
  export type Output = Log[]
}

export interface InsertLog {
  insert: (input: InsertLog.Input) => Promise<void>
}

export namespace InsertLog {
  export type Input = {
    message: string
    origin: string
    type: string
    user: User
  }
}
