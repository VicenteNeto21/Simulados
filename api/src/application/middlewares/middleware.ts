import { HttpResponse } from '@/application/helpers'

export interface Middleware {
  handle: (httpRequest: Middleware.Input) => Promise<Middleware.Output>
}

export namespace Middleware {
  export type Input = any
  export type Output= HttpResponse
}
