import { InvalidMimeTypeError } from '@/application/errors'

export type Extension = 'png' | 'jpg' | 'mkv' | 'mp4' | 'pdf'

export class AllowedMimeTypes {
  constructor (
    private readonly allowed: Extension[],
    private readonly mimeType: string
  ) { }

  validate (): Error | undefined {
    let isValid = false
    if (this.isPng()) isValid = true
    else if (this.isJpg()) isValid = true
    else if (this.isMkv()) isValid = true
    else if (this.isMp4()) isValid = true
    else if (this.isPdf()) isValid = true
    if (!isValid) return new InvalidMimeTypeError(this.allowed)
  }

  private isPng (): boolean {
    return this.allowed.includes('png') && this.mimeType === 'image/png'
  }

  private isJpg (): boolean {
    return this.allowed.includes('jpg') && /image\/jpe?g/.test(this.mimeType)
  }

  private isMkv (): boolean {
    return this.allowed.includes('mkv') && this.mimeType === 'video/mkv'
  }

  private isMp4 (): boolean {
    return this.allowed.includes('mp4') && this.mimeType === 'video/mp4'
  }

  private isPdf (): boolean {
    return this.allowed.includes('pdf') && this.mimeType === 'application/pdf'
  }
}
