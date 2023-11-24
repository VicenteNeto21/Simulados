export class AuthenticationError extends Error {
  constructor () {
    super('Authentication Fails')
    this.name = 'AuthenticationError'
  }
}
export class PermissionError extends Error {
  constructor () {
    super('User is not an Admin')
    this.name = 'PermissionError'
  }
}
