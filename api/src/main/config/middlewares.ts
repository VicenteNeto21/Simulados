
import express, { json, Express } from 'express'
import cors from 'cors'
import { resolve } from 'path'

export const setupMiddlewares = (app: Express): void => {
  app.use(cors())
  app.use(json())
  app.use((req, res, next) => {
    res.type('json')
    next()
  })
  app.use('/images/', express.static(resolve(__dirname, '..', '..', '..', 'uploads', 'images')))
}
