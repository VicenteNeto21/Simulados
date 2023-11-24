import { Question, User } from '.'

export type Notification = {
  id: number
  evaluation?: boolean
  answered?: boolean
  question?: Question
  user?: User
  createdAt?: Date
  updatedAt?: Date
}

export interface LoadNotifications {
  get: (input: LoadNotifications.Input) => Promise<LoadNotifications.Output>
}

export namespace LoadNotifications {
  export type Input = Notification
  export type Output = Notification[]
}

export interface ShowNotification {
  show: (input: ShowNotification.Input) => Promise<ShowNotification.Output>
}

export namespace ShowNotification {
  export type Input = { id: string }
  export type Output = Notification | undefined
}

export interface UpdateNotification {
  update: (input: UpdateNotification.Input) => Promise<UpdateNotification.Output>
}

export namespace UpdateNotification {
  export type Input = {
    id: string
    evaluation?: boolean
    answered?: boolean
    question?: Question
    user?: User
  }
  export type Output = Notification | undefined
}

export interface InsertNotification {
  insert: (input: InsertNotification.Input) => Promise<InsertNotification.Output>
}

export namespace InsertNotification {
  export type Input = {
    evaluation?: boolean
    answered?: boolean
    question?: Question
    user?: User
  }
  export type Output = Notification | undefined
}

export interface DeleteNotification {
  delete: (input: DeleteNotification.Input) => Promise<DeleteNotification.Output>
}

export namespace DeleteNotification {
  export type Input = { id: string }
  export type Output<T = any> = T
}
