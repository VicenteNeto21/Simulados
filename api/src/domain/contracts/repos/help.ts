
export type Help = {
  id: number
  help?: number
}

export interface ListHelp {
  get: () => Promise<ListHelp.Output>
}

export namespace ListHelp {
  export type Output = Help[]
}
