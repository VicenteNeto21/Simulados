export interface ResetPassword {
  resetPassword: (input: ResetPassword.Input) => Promise<void>
}

export namespace ResetPassword {
  export type Input = { id: string, hashedPassword: string }
}
