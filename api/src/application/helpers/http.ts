import { UnauthorizedError, ServerError, ForbiddenError, ContentNotFound } from '@/application/errors'

export type HttpResponse<T = any> = {
  statusCode: number
  data: T
}

export interface HttpRequest {
  data?: any
}

export const ok = <T = any> (data: T): HttpResponse<T> => ({
  statusCode: 200,
  data
})

export const created = <T = any> (data: T): HttpResponse<T> => ({
  statusCode: 201,
  data
})

export const noContent = (): HttpResponse => ({
  statusCode: 204,
  data: ''
})

export const badRequest = (error: Error): HttpResponse<Error> => ({
  statusCode: 400,
  data: error
})

export const unauthorized = (): HttpResponse<Error> => ({
  statusCode: 401,
  data: new UnauthorizedError()
})

export const forbidden = (): HttpResponse<Error> => ({
  statusCode: 403,
  data: new ForbiddenError()
})

export const contentNotFound = (field: string): HttpResponse<Error> => ({
  statusCode: 404,
  data: new ContentNotFound(field)
})

export const serverError = (error: Error | any): HttpResponse<Error> => ({
  statusCode: 500,
  data: new ServerError(error)
})
