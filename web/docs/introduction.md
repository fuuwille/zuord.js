---
id: introduction
sidebar_label: Introduction  
title: Introduction to Zuord  
sidebar_position: 1  
---

# Introduction to Zuord

**Zuord** (German for 'assign' or 'map') is a TypeScript library focused on deep object manipulations and type inferences, providing full synchronization between runtime functions and compile-time types.

## Function & Type Synchronization

In Zuord, each operation exists in two synchronized forms:

- **Runtime functions** (`integrate`, `merge`, `pick`, `omit`, etc.)

  ```ts
  const fee = zuord.merge({ a: 222 }, { a: 'hello', b: 101.05 }, { c: 'world' } as const)

  // Value: { a: 'hello', b: 101.05, c: 'world' }
  // Type: { a: string , b: number, c: 'world' }
  ```

- **Compile-time types** (`Integrate`, `Merge`, `Pick`, `Omit`, etc.)

  ```ts
  type Foo = Zuord.Merge<[{ x: 314 }, { x: 'zuord', y: boolean }, { z: string | 42 }]>
  // Type: { x: 'zuord', y: boolean, z: string | 42 }
  ```

Each return type precisely matches its Zuord type, ensuring compile-time type safety throughout development:

```typescript
const output = zuord.merge({ foo: 1 }, { bar: 'text' } as const)

// Defined: Zuord.Merge<[{ foo: 1 }, { bar: 'text' }]>
// Returned: { foo: number, bar: 'text' }
```

This effectively eliminates any fallback to any and ensures complete type safety.

## Smarter Manipulations & Inferences

Zuord delivers smarter and more precise runtime manipulations and compile-time type inferences compared to native implementations and popular alternatives. Here’s why Zuord stands out:

- **Recursive by Nature**  
  Zuord operates recursively, applying deep operations across all levels by default:

  ```typescript
  const foo = { a: { b: { x: "zuord", y: "is" } } };
  const bar = { a: { b: { z: "cool" } } };

  const out = zuord.merge(foo, bar);
  // { a: { b: { x: "zuord", y: "is", z: "cool" } } }
  ```

- **Special Behaviors**  
  Zuord includes built-in special behaviors, designed to match real-world use cases.

  For example, the merge function concatenates arrays by default:

  ```typescript
  const foo = { h: ["zuord", "is"], l: [2, [2, 2]] };
  const bar = { h: ["cool"], l: [4, [5, 6]] };

  const out = zuord.merge(foo, bar);

  // Zuord behavior: { h: ["zuord", "is", "cool"], l: [2, [2, 2], 4, [5, 6]] }
  // Other libraries: { h: ["cool"], l: [4, [5, 6]] } (overridden)
  ```

  For all special behaviors, see: [Special Behaviors](#smarter-manipulations--inferences)

- **Configurable Usage**    
  Zuord enables you to override default behaviors according to your specific use cases.