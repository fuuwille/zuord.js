---
id: introduction
sidebar_label: Introduction  
title: Introduction to Zuord  
sidebar_position: 1  
---

# Introduction to Zuord

**Zuord** (German for 'assign' or 'map') is a TypeScript library focused on deep object manipulations and type inferences, providing full synchronization between runtime functions and compile-time types.

## Function + Type Synchronization

In Zuord, each operation exists in two synchronized forms:

- **Runtime functions** (`integrate`, `merge`, `pick`, `omit`, etc.)

```ts
const fee = zuord.merge({ a: 222 }, { a: 'hello', b: 101.05 }, { c: 'world' } as const)
// value => { a: 'hello', b: 101.05, c: 'world' }
// type  => { a: string , b: number, c: 'world' }
```

- **Compile-time types** (`Integrate`, `Merge`, `Pick`, `Omit`, etc.)

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

Thus, the possibility of falling back to any or losing type safety is effectively eliminated.

## Smarter Manipulations & Inferences

Zuord delivers smarter runtime manipulations and compile-time type inferences than native implementations and popular alternatives.

- **Recursive by Nature**  
  Zuord handles nested structures recursively, enabling deep merging and type-safe transformations by default.