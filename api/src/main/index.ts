import './config/module-alias'
import { PgConnection } from '@/infra/repos/postgres/helpers'
import { env } from '@/main/config/env'
import 'reflect-metadata'
import bcrypt from 'bcrypt'

PgConnection.getInstance().connect()
  .then(async () => {
    console.log(await bcrypt.hash('12345678', 12))
    const { app } = await import('@/main/config/app')
    app.listen(env.port, () => console.log(`Server running at http://localhost:${env.port}`))
  })
  .catch(console.error)
