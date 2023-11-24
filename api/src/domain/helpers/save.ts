import { FilesInput } from '@/domain/entities'
import fs from 'fs'
import { resolve } from 'path'
import { UpdateUser as Save } from '../contracts/repos'

type Setup = () => FileManager
type Input = Save.Input & FilesInput
type Output = any

const aleatory = (): string => Math.floor(Math.random() * 10000 + 10000).toString()

export type FileManager = (input: Input) => Promise<Output>

export const fileManager: Setup = () => async input => {
  const { files, ...data } = input
  try {
    if (files !== undefined) {
      for (const file of files) {
        if (file !== null && file instanceof Object) {
          const extension = file.mimeType.split('/')[1]
          const filename = aleatory() + '.' + extension
          const dataBuffer = Buffer.from(file.buffer)
          await fs.writeFile(resolve(__dirname, '..', '..', '..', 'uploads', 'images', `${filename}`), dataBuffer, (err) => {
            if (err != null) console.log(err)
          })
          data.avatar = filename
        }
      }
    }
    return data
  } catch (error) {
    console.log(error)
  }
}
