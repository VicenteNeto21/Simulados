export type ErrorLog = {
  id: number
  message?: string
  createdAt?: Date
}

export interface ListErrorLog {
  get: () => Promise<ListErrorLog.Output>
}

export namespace ListErrorLog {
  export type Output = ErrorLog[]
}

export interface InsertErrorLog {
  insert: (input: InsertErrorLog.Input) => Promise<void>
}

export namespace InsertErrorLog {
  export type Input = {
    message: string
  }
}
