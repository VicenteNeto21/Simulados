export interface Validator{
  validate: () => Error |undefined | Promise<Error |undefined>
}

export interface AsyncValidator{
  validate: () => Promise<Error |undefined>
}
