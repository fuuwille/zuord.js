import { getTokens, tokenModifier } from "@site/src/utils/pretext"

export const source = {
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
        getTokens(source.runtime[0]),
        getTokens(source.runtime[1]),
        getTokens(source.runtime[2])
    ],
    type: [
        getTokens(source.type[0]),
        getTokens(source.type[1]),
        getTokens(source.type[2])
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

export const props = {
    runtime: [
        { pretext: { source: tokens.runtime[0], modifiers: modifiers.runtime[0] }, description: "Produces a new object with the given patch integrated into the source" },
        { pretext: { source: tokens.runtime[1], modifiers: modifiers.runtime[1] }},
        { pretext: { source: tokens.runtime[2], modifiers: modifiers.runtime[2] }}
    ],
    type: [
        { pretext: { source: tokens.type[0], modifiers: modifiers.type[0] }, description: "Produces a new type with the given patch integrated into the source." },
        { pretext: { source: tokens.type[1], modifiers: modifiers.type[1] }},
        { pretext: { source: tokens.type[2], modifiers: modifiers.type[2] }}
    ]
}