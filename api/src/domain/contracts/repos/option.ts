import { Question } from '.'

export type Option = {
  id: number
  option?: string
  correct?: boolean
  question?: Question
  createdAt?: Date
  updatedAt?: Date
}

export interface LoadOptions {
  get: () => Promise<LoadOptions.Output>
}

export namespace LoadOptions {
  export type Output = Option[]
}

export interface ShowOption {
  show: (input: ShowOption.Input) => Promise<ShowOption.Output>
}

export namespace ShowOption {
  export type Input = { id: string }
  export type Output = Option | undefined
}

export interface UpdateOption {
  update: (input: UpdateOption.Input) => Promise<UpdateOption.Output>
}

export namespace UpdateOption {
  export type Input = {
    id: string
    option?: string
    correct?: boolean
    question?: Question
  }
  export type Output = Option | undefined
}

export interface InsertOption {
  insert: (input: InsertOption.Input) => Promise<InsertOption.Output>
}

export namespace InsertOption {
  export type Input = {
    option?: string
    correct?: boolean
    question?: Question
  }
  export type Output = Option | undefined
}

export interface DeleteOption {
  delete: (input: DeleteOption.Input) => Promise<DeleteOption.Output>
}

export namespace DeleteOption {
  export type Input = { id: string }
  export type Output<T = any> = T
}
