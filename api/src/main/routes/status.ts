import { Router } from 'express'
import { adaptExpressRoute as adapt } from '@/main/adapters'
import { auth } from '@/main/middlewares'
import { makeGetStatusController } from '@/main/factories/application/controllers/status'

export default (router: Router): void => {
  router.get('/status', auth, adapt(makeGetStatusController()))
}
