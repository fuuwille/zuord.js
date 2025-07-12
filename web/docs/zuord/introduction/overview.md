---
sidebar_label: Overview  
title: Overview of Zuord  
sidebar_position: 1  
---

# Overview of Zuord

# Zuord

**Zuord** (German for “assign” or “map”) is a JS/TS utility library that provides **full synchronization between compile-time types and runtime functions** for deep object manipulation and structural transformations.

### Function + Type Synchronization

In Zuord's core, each operation exists in two synchronized forms:

- A **runtime function** (e.g., `merge`, `pick`, `omit`, `normalize`)

```ts
const fee = zuord.merge({ a: 222 }, { a: 'hello', b: null }, { c: 'world' } as const)
// value & type => { a: string, b: null, c: 'world' }
```

- A **compile-time type** (e.g., `Merge`, `Pick`, `Omit`, `Normalize`)

```ts
type Foo = Zuord.Merge<[{ x: 'kayra' }, { x: 314, y: boolean }, { z: string | 42 }]>
// type only => { x: 'kayra' | 314, y: boolean, z: string | 42 }
```

Each function’s return type is fully connected to its matching Zuord type, guaranteeing accurate types even at runtime.

```typescript
const output = zuord.merge({ foo: 1 }, { bar: 'text' } as const)

// Defined type
// output: Zuord.Merge<[{ foo: 1 }, { bar: 'text' }]>

// Returned type
// output: { foo: number, bar: 'text' }
```