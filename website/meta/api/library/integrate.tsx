import { getTokens } from "@site/src/utils/pretext"

export const signature = {
    runtime: [
`zuord.integrate(source, patch, mode?)`,
`function integrate <TSource, TPatch>(source: TSource, patch: TPatch) 
    : Zuord.Integrate<TSource, TPatch>`,
`function integrate <TSource, TPatch, TMode>(source: TSource, patch: TPatch, mode: TMode)
    : Zuord.Integrate<TSource, TPatch, TMode>`
    ],
    type: [
`Zuord.Integrate<TSource, TPatch, TMode?>`,
`type Integrate<TSource, TPatch>`,
`type Integrate<TSource, TPatch, TMode>`
    ]
}

export const tokens = {
    runtime: [
        getTokens(signature.runtime[1]),
        getTokens(signature.runtime[2])
    ],
    type: [
        getTokens(signature.type[1]),
        getTokens(signature.type[2])
    ]
}