import { Router } from 'express'
import { adaptExpressRoute as adapt } from '@/main/adapters'
import { auth } from '@/main/middlewares'
import {
  makeUpdateNotificationController,
  makeGetNotificationController,
  makeShowNotificationController
} from '@/main/factories/application/controllers/notification'

export default (router: Router): void => {
  router.get('/notifications', auth, adapt(makeGetNotificationController()))
  router.get('/notifications/:id', auth, adapt(makeShowNotificationController()))
  router.put('/notifications/:id', auth, adapt(makeUpdateNotificationController()))
}
