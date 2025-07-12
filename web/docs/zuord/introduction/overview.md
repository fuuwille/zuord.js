---
sidebar_label: Overview
title: Overview of Zuord
sidebar_position: 1
---

# Overview of Zuord

# Zuord
**Zuord** (German for “assign” or “map”) is a utility library designed to provide **synchronized compile-time and runtime behavior** for deep object manipulation and structural transformations in TypeScript.

## Function + Type Synchronization

Every utility in Zuord is available in two synchronized forms:

- A **runtime function** (e.g., `merge`, `pick`, `omit`, `eq..`, `is..`)
- A **TypeScript type** (e.g., `Merge`, `Pick`, `Omit`, `Eq..`, `Is..`)

These pairs are grouped into cohesive modules:

- **Core operations** like `merge`, `pick`, and `omit` focus on deep structural transformations.
- **Utility operations** like `eq..`, `is..`, and `has..` provide type-safe comparisons and structural checks.

This modular and synchronized design ensures that each operation behaves consistently between compile-time and runtime:

```ts
type Output = Zuord.Merge<[{ a: 314 | true }, { b: string }]>;
//     => { a: 314 | true, b: string }

type Output2 = ZuordUtil.IsEvery<[{ x: number }, { x: 222, y: boolean }], { x: number }>
//     => true

const output = zuord.merge({ a: 1 }, { b: 'text' } as const);
//     => { a: number, b: 'text' }

const output2 = zuord.isEvery([{ x: -1 }, { x: 13, y: true }], { x: "number" });
//     => true
```