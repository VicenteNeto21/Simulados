export interface AccountModel {
  id: string
  name: string
  email: string
  password: string
}

export interface NewAccountModel {
  id: string
  name: string
  email: string
  createdAt?: Date
}
