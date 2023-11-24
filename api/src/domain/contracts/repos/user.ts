import { Game, Log, Notification, Question } from '.'

export type User = {
  id: number
  name?: string
  email?: string
  avatar?: string
  password?: string
  notifications?: Notification[]
  questions?: Question[]
  logs?: Log[]
  games?: Game[]
  createdAt?: Date
  updatedAt?: Date
}

export interface LoadUsers {
  get: (input: LoadUsers.Input) => Promise<LoadUsers.Output>
}

export namespace LoadUsers {
  export type Input = {id: number}
  export type Output = User[]
}

export interface ShowUser {
  show: (input: ShowUser.Input) => Promise<ShowUser.Output>
}

export namespace ShowUser {
  export type Input = { id: string }
  export type Output = User | undefined
}

export interface ShowUserByNickName {
  showByNickName: (input: ShowUserByNickName.Input) => Promise<ShowUserByNickName.Output>
}

export namespace ShowUserByNickName {
  export type Input = { email: string}
  export type Output = User | undefined
}

export interface UpdateUser {
  update: (input: UpdateUser.Input) => Promise<UpdateUser.Output>
}

export namespace UpdateUser {
  export type Input = {
    id: string
    name?: string
    email?: string
    notifications?: Notification[]
    questions?: Question[]
    logs?: Log[]
    games?: Game[]
    avatar?: string
    password?: string
  }
  export type Output = User | undefined
}

export interface InsertUser {
  insert: (input: InsertUser.Input) => Promise<InsertUser.Output>
}

export namespace InsertUser {
  export type Input = {
    name: string
    email: string
    avatar?: string
    password: string
  }
  export type Output = User | undefined
}

export interface DeleteUser {
  delete: (input: DeleteUser.Input) => Promise<DeleteUser.Output>
}

export namespace DeleteUser {
  export type Input = { id: string }
  export type Output<T = any> = T
}
