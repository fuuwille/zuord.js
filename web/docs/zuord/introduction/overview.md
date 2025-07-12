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
- A **TypeScript type** (e.g., `Merge`, `Pick`, `Omit`, `Normalize`)

```typescript
type Output = Zuord.Merge<[{ a: 314}, { a: true, b: string }]>
//     => { a: 314 | true, b: string }

const output = zuord.merge({ a: 1 }, { b: 'text' } as const)
//     => { a: number, b: 'text' }
```

And the return type of each function is fully integrated with its corresponding TypeScript type, ensuring type-level accuracy at runtime.
```typescript
const output = zuord.merge({ a: 1 }, { b: 'text' } as const)

// output (type): Zuord.Merge<[{ a: 1 }, { b: 'text' }]>
```