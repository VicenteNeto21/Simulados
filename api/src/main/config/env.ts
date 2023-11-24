import 'dotenv/config'

export const env = {
  port: process.env.SERVER_PORT!,
  jwtSecret: process.env.JWT_SECRET!,
  defaultPass: process.env.DEFAULT_PASS!
}
