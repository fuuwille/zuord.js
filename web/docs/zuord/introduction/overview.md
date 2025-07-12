---
sidebar_label: Overview  
title: Overview of Zuord  
sidebar_position: 1  
---

# Overview of Zuord

**Zuord** (German for 'assign' or 'map') is a TypeScript library focused on deep object manipulation and structural transformations, providing full synchronization between compile-time types and runtime functions.

## Function + Type Synchronization

In Zuord, each operation exists in two synchronized forms:

- **Runtime functions** (e.g., `merge`, `pick`, `omit`, `normalize`)

```ts
const fee = zuord.merge({ a: 222 }, { a: 'hello', b: 101.05 }, { c: 'world' } as const)
// value => { a: 'hello', b: 101.05, c: 'world' }
// type  => { a: string , b: number, c: 'world' }
```

- **Compile-time types** (e.g., `Merge`, `Pick`, `Omit`, `Normalize`)

```ts
type Foo = Zuord.Merge<[{ x: 314 }, { x: 'zuord', y: boolean }, { z: string | 42 }]>
// Foo : { x: 'zuord', y: boolean, z: string | 42 }
```

Each return type is fully connected to its matching Zuord type, ensuring type correctness is preserved throughout development and runtime:

```typescript
const output = zuord.merge({ foo: 1 }, { bar: 'text' } as const)

// Defined type
// output: Zuord.Merge<[{ foo: 1 }, { bar: 'text' }]>

// Returned type
// output: { foo: number, bar: 'text' }
```

## Smarter Manipulations & Inferences

Zuord delivers smarter runtime manipulations and compile-time type inferences than native implementations and popular alternatives.