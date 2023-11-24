import { Router } from 'express'
import { adaptExpressRoute as adapt } from '@/main/adapters'
import { auth } from '@/main/middlewares'
import {
  makeUpdateQuestionController,
  makeDeleteQuestionController,
  makeGetQuestionController,
  makeShowQuestionController,
  makeInsertQuestionController
} from '@/main/factories/application/controllers/question'

export default (router: Router): void => {
  router.get('/questions', auth, adapt(makeGetQuestionController()))
  router.get('/questions/:id', auth, adapt(makeShowQuestionController()))
  router.post('/questions', auth, adapt(makeInsertQuestionController()))
  router.put('/questions/:id', auth, adapt(makeUpdateQuestionController()))
  router.delete('/questions/:id', auth, adapt(makeDeleteQuestionController()))
}
