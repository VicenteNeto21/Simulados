import { Router } from 'express'
import { makeGetLogController } from '@/main/factories/application/controllers/log'
import { makeGetErrorLogController } from '@/main/factories/application/controllers/error-log'
import { adaptExpressRoute as adapt } from '@/main/adapters'

export default (router: Router): void => {
  router.get('/error-logs', adapt(makeGetErrorLogController()))
  router.get('/logs', adapt(makeGetLogController()))
}
