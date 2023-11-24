import { Router } from 'express'
import { adaptExpressRoute as adapt, adaptMulter as upload } from '@/main/adapters'
import { auth } from '@/main/middlewares'
import { makeLoginController, makeResetPasswordController } from '@/main/factories/application/controllers'
import {
  makeUpdateUserController,
  makeDeleteUserController,
  makeGetUserController,
  makeShowUserController,
  makeInsertUserController
} from '@/main/factories/application/controllers/user'

export default (router: Router): void => {
  router.get('/users', auth, adapt(makeGetUserController()))
  router.get('/users/:id', auth, adapt(makeShowUserController()))
  router.post('/users', adapt(makeInsertUserController()))
  router.post('/reset-password', auth, adapt(makeResetPasswordController()))
  router.put('/users/:id', auth, upload, adapt(makeUpdateUserController()))
  router.delete('/users/:id', auth, adapt(makeDeleteUserController()))
  router.post('/users/login', adapt(makeLoginController()))
}
