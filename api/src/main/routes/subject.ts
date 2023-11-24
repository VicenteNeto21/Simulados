import { Request, Response, Router } from 'express'
import { adaptExpressRoute as adapt } from '@/main/adapters'
import { auth } from '@/main/middlewares'
import {
  makeUpdateOptionController,
  makeDeleteOptionController,
  makeGetOptionController,
  makeShowOptionController,
  makeInsertOptionController
} from '@/main/factories/application/controllers/option'
import { Subject } from '@/infra/repos/postgres/entities/subject'
import { getRepository } from 'typeorm'

const repo = getRepository(Subject)

export default (router: Router): void => {
  router.get('/subjects', auth, async (req: Request, res: Response) => {
    try {
      const data = await repo.find()
      res.json(data) 
    } catch(e: any){
      return res.json({error: e})
    }
  })
  router.get('/subjects/:id', auth, async (req: Request, res: Response) => {
    try {
      const data = await repo.findOne({where: {id: Number(req.params.id)}})
      res.json(data) 
    } catch(e: any){
      return res.json({error: e})
    }
  })
  router.post('/subjects', auth, async (req: Request, res: Response) => {
    try {
      const data = await repo.insert({...req.body})
      res.json(data) 
    } catch(e: any){
      return res.json({error: e})
    }
  })
  router.put('/subjects/:id', auth, async (req: Request, res: Response) => {
    try {
      const data = await repo.update(Number(req.params.id), { ...req.body})
      res.json(data) 
    } catch(e: any){
      return res.json({error: e})
    }
  })
  router.delete('/subjects/:id', auth, async (req: Request, res: Response) => {
    try {
      await repo.delete(req.params.id)
      res.json({success: true}) 
    } catch(e: any){
      return res.json({error: e})
    }
  })
}







