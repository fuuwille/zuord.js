export const signature = {
    runtime: [
`function integrate <TSource, TPatch>(source: TSource, patch: TPatch): Zuord.Integrate<TSource, TPatch>`,
`function integrate <TSource, TPatch, TMode>(source: TSource, patch: TPatch, mode: TMode): Zuord.Integrate<TSource, TPatch, TMode>`
    ],
    type: [
`type Integrate<TSource, TPatch>`,
`type Integrate<TSource, TPatch, TMode>`
    ]
}