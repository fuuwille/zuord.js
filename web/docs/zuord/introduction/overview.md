---
sidebar_label: Overview  
title: Overview of Zuord  
sidebar_position: 1  
---

# Overview of Zuord

**Zuord** (German for “assign” or “map”) is a TypeScript utility library that provides **full synchronization between compile-time types and runtime functions** for deep object manipulation and structural transformations.

## Function + Type Synchronization

In Zuord's core, each operation exists in two synchronized forms:

- A **runtime function** (e.g., `merge`, `pick`, `omit`, `normalize`)

- A **compile-time type** (e.g., `Merge`, `Pick`, `Omit`, `Normalize`)

```ts
const fee = zuord.merge({ a: 222 }, { a: 'hello', b: null }, { c: 'world' } as const)
//     => { a: string, b: null, c: 'world' }

type Foo = Zuord.Merge<[{ x: 'kayra' }, { x: 314, y: boolean }, { z: string | 42 }]>
//     => { x: 'kayra' | 314, y: boolean, z: string | 42 }
```

Each function’s return type is fully connected to its matching Zuord type, guaranteeing accurate types even at runtime.

```typescript
const output = zuord.merge({ a: 1 }, { b: 'text' } as const)

// Defined type
// output: Zuord.Merge<[{ a: 1 }, { b: 'text' }]>

// Returned type
// output: { a: number, b: 'text' }
```