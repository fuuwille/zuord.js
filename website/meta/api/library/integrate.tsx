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
    ],
    demonstration: [
        {
            source: {
                runtime:
`import { zuord } from 'zuord';
const source = { a: { b: { x: "zuord", y: "is" } } };
const patch = { a: { b: { z: "cool" as const } } };
const out = zuord.integrate(source, patch);`,
                type:
`import { zuord } from 'zuord';
type TSource = { a: { b: { x: string, y: string } } };
type TPatch = { a: { b: { z: "cool" } } };
type TOut = Zuord.Integrate<TSource, TPatch>;`,
            },
            result: {
                runtime: null,
                type: null,
            }
        }
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
    ],
    demonstration: [
        {
            source: {
                runtime: getTokens(source.demonstration[0].source.runtime),
                type: getTokens(source.demonstration[0].source.type)
            },
            result: {
                runtime: getTokens(source.demonstration[0].result.runtime),
                type: getTokens(source.demonstration[0].result.type)
            }
        }
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
    ],
    demonstration: [
        {
            source: {
                runtime: null,
                type: null
            },
            result: {
                runtime: null,
                type: null
            }
        }
    ]
}

export const properties = {
    runtime: [
        { pretext: { source: tokens.runtime[0], modifiers: modifiers.runtime[0] }, description: "Produces a new object with the given patch integrated into the source" },
        { pretext: { source: tokens.runtime[1], modifiers: modifiers.runtime[1] }},
        { pretext: { source: tokens.runtime[2], modifiers: modifiers.runtime[2] }}
    ],
    type: [
        { pretext: { source: tokens.type[0], modifiers: modifiers.type[0] }, description: "Produces a new type with the given patch integrated into the source." },
        { pretext: { source: tokens.type[1], modifiers: modifiers.type[1] }},
        { pretext: { source: tokens.type[2], modifiers: modifiers.type[2] }}
    ],
    demonstration: [
        {
            source: {
                runtime: { pretext: { source: tokens.demonstration[0].source.runtime, modifiers: modifiers.demonstration[0].source.runtime } },
                type: { pretext: { source: tokens.demonstration[0].source.type, modifiers: modifiers.demonstration[0].source.type } }
            },
            result: {
                runtime: { pretext: { source: tokens.demonstration[0].result.runtime, modifiers: modifiers.demonstration[0].result.runtime } },
                type: { pretext: { source: tokens.demonstration[0].result.type, modifiers: modifiers.demonstration[0].result.type } }
            }
        }
    ]
}