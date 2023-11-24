export interface Encrypter {
  encrypt: (value: string) => Promise<string>
  compare: (password: string, hashedPassword: string) => Promise<boolean>
}
