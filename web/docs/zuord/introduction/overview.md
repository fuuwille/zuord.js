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
const output = zuord.merge({ a: 1 }, { b: 'text' } as const)
//     => { a: number, b: 'text' }

type Output = Zuord.Merge<[{ x: 314}, { x: true, y: string }]>
//     => { a: 314 | true, b: string }
```

Each function’s return type is fully connected to its matching Zuord type, guaranteeing accurate types even at runtime.

```typescript
const output = zuord.merge({ a: 1 }, { b: 'text' } as const)

// Defined type
// output: Zuord.Merge<[{ a: 1 }, { b: 'text' }]>

// Returned type
// output: { a: number, b: 'text' }
```

## Type Normalization

In Zuord's core, all types are wrapped with `Normalize` to provide a clear and simplified type representation. This normalization enables intelligent type inference, making complex types easier to understand and work with.

By applying Normalize, Zuord ensures that types are presented in their most explicit form while maintaining full type accuracy and usability.

```typescript
// Merge is wrapped with normalize
type Output = Zuord.Merge<[{ a: 314}, { a: true, b: string }]>

// With normalize: 
```