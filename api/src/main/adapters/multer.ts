import { ServerError } from '@/application/errors'

import { RequestHandler } from 'express'
import multer from 'multer'

export const adaptMulter: RequestHandler = (req, res, next) => {
  const upload = multer().any()
  upload(req, res, error => {
    req.body = Object.fromEntries(Object.entries(req.body).filter(([_, v]) => v !== 'undefined'))

    Object.entries(req.body).forEach(([k, v]) => {
      if (v === 'true') v = true
      if (v === 'false') v = false
      req.body[k] = v
    })

    if (error !== undefined) {
      return res.status(500).json({ error: new ServerError(error).message })
    }
    if (req.files !== undefined) {
      const files = Object.values(req.files).map(file => ({ buffer: file.buffer, mimeType: file.mimetype, fileName: file.fieldname }))
      req.locals = { ...req.locals, files }
    }
    next()
  })
}
