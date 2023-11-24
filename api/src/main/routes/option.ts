import { Router } from 'express'
import { adaptExpressRoute as adapt } from '@/main/adapters'
import { auth } from '@/main/middlewares'
import {
  makeUpdateOptionController,
  makeDeleteOptionController,
  makeGetOptionController,
  makeShowOptionController,
  makeInsertOptionController
} from '@/main/factories/application/controllers/option'

export default (router: Router): void => {
  router.get('/options', auth, adapt(makeGetOptionController()))
  router.get('/options/:id', auth, adapt(makeShowOptionController()))
  router.post('/options', auth, adapt(makeInsertOptionController()))
  router.put('/options/:id', auth, adapt(makeUpdateOptionController()))
  router.delete('/options/:id', auth, adapt(makeDeleteOptionController()))
}
