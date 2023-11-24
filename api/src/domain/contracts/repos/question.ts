import { Notification, Option, Status, User } from '.'

export type Question = {
  id: number
  statement?: string
  denunciation?: boolean
  status?: Status
  user?: User
  options?: Option[]
  type?: string
  notifications?: Notification[]
  createdAt?: Date
  updatedAt?: Date
}

export interface LoadQuestions {
  get: () => Promise<LoadQuestions.Output>
}

export namespace LoadQuestions {
  export type Output = Question[]
}

export interface ShowQuestion {
  show: (input: ShowQuestion.Input) => Promise<ShowQuestion.Output>
}

export namespace ShowQuestion {
  export type Input = { id: string }
  export type Output = Question
}

export interface UpdateQuestion {
  update: (input: UpdateQuestion.Input) => Promise<UpdateQuestion.Output>
}

export namespace UpdateQuestion {
  export type Input = {
    id: string
    statement?: string
    status?: Status
    denunciation?: boolean
    user?: User
    notifications?: Notification[]

  }
  export type Output = Question | undefined
}

export interface InsertQuestion {
  insert: (input: InsertQuestion.Input) => Promise<InsertQuestion.Output>
}

export namespace InsertQuestion {
  export type Input = {
    statement: string
    user: User,
    type: string
    subject: {id: number}
  }
  export type Output = Question | undefined
}

export interface DeleteQuestion {
  delete: (input: DeleteQuestion.Input) => Promise<DeleteQuestion.Output>
}

export namespace DeleteQuestion {
  export type Input = { id: string }
  export type Output<T = any> = T
}
