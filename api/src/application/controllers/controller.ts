import { Validator, ValidationComposite } from '@/application/validation'
import { HttpResponse, badRequest, serverError } from '@/application/helpers'
export abstract class Controller {
  abstract perform (httpRequest: any): Promise<HttpResponse>

  async buildValidators (httpRequest: any): Promise<Validator[]> {
    return []
  }

  async handle (httpRequest: any): Promise<HttpResponse> {
    const error = await this.validate(httpRequest)
    if (error !== undefined) return badRequest(error as any)
    try {
      return await this.perform(httpRequest)
    } catch (error: any) {
      console.log(error)
      return serverError(error)
    }
  }

  private async validate (httpRequest: any): Promise<Error | undefined> {
    const validators = await this.buildValidators(httpRequest)
    return new ValidationComposite(validators).validate()
  }
}
