import { getTokens, tokenModifier } from "@site/src/utils/pretext"

export const tokenSource = {
    runtime: [
`zuord.integrate`,
`function integrate <TSource, TPatch>(source: TSource, patch: TPatch) 
    : Zuord.Integrate<TSource, TPatch>`,
`function integrate <TSource, TPatch, TMode>(source: TSource, patch: TPatch, mode: TMode)
    : Zuord.Integrate<TSource, TPatch, TMode>`
    ],
    type: [
`Zuord.Integrate`,
`type Integrate<TSource, TPatch>`,
`type Integrate<TSource, TPatch, TMode>`
    ]
}

export const tokens = {
    runtime: [
        getTokens(tokenSource.runtime[0]),
        getTokens(tokenSource.runtime[1]),
        getTokens(tokenSource.runtime[2])
    ],
    type: [
        getTokens(tokenSource.type[0]),
        getTokens(tokenSource.type[1]),
        getTokens(tokenSource.type[2])
    ]
}

export const modifiers = {
    runtime: [
        [tokenModifier.const("zuord"), tokenModifier.func("integrate")],
        [tokenModifier.type("Zuord", "Integrate")],
        [tokenModifier.type("Zuord", "Integrate")]
    ],
    type: [
        [tokenModifier.allType()],
        null,
        null
    ]
}