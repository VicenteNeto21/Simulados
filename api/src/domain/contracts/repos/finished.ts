
export type Finished = {
  id: number
  because?: string
}

export interface ListFinished {
  get: () => Promise<ListFinished.Output>
}

export namespace ListFinished {
  export type Output = Finished[]
}
