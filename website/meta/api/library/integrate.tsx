import { getTokens } from "@site/src/utils/pretext"

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

export const tokens = {
    runtime: [
        getTokens(signature.runtime[0]),
        getTokens(signature.runtime[1])
    ],
    type: [
        getTokens(signature.type[0]),
        getTokens(signature.type[1])
    ]
}