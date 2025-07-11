---
sidebar_label: Eq
title: Eq Utilities
---

# Eq Utility Types

The `Eq` utility types family offers strict, structural equality checks between types. These types operate entirely at compile-time and help assert whether types or collections of types are **exactly the same**.

All utilities are re-exported from `@zuord/util`.

---

## Table of Contents

- [ZuordEq](#zuordeq)
- [ZuordEqAny](#zuordeqany)
- [ZuordEqEvery](#zuordeqevery)
- [ZuordEqSome](#zuordeqsome)
- [ZuordEqAnySome](#zuordeqanysome)
- [ZuordEqEverySome](#zuordeqeverysome)
- [Import Path](#import-path)
- [See Also](#see-also)

---

## `ZuordEq<T1, T2>`

Returns `true` if `T1` and `T2` are **strictly equal** types.

```ts
type A = ZuordEq<"a", "a">;                      // true
type B = ZuordEq<"a", "b">;                      // false
type C = ZuordEq<{ x: number }, { x: number }>;  // true
type D = ZuordEq<{ x: number }, { x: 1 }>;       // false
```