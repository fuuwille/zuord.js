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
  Zuord operates recursively, applying deep operations across all levels by default

  ```typescript
  const foo = { a: { b: { x: "zuord", y: "is" } } };
  const bar = { a: { b: { z: "cool" } } };

  const out = zuord.merge(foo, bar);
  // { a: { b: { x: "zuord", y: "is", z: "cool" } } }
  ```

- **Custom Behaviors**  
  Zuord supports custom behaviors to better align with real-world use cases.

  For example, the merge function concatenates arrays by default:

  ```typescript
  const foo = { h: ["zuord", "is"], l: [1, [2, 3]] };
  const bar = { h: ["cool"], l: [4, [5, 6]] };

  const out = zuord.merge(foo, bar);
  // { h: ["zuord", "is", "cool"], l: [1, [2, 3], 4, [5, 6]] }
  ```

  For all custom behaviors, see all: [Custom Behaviors](#smarter-manipulations--inferences)