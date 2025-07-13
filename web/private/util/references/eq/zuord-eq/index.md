---
sidebar_label: ZuordEq
---

# ZuordEq

`ZuordEq` is a type-level utility that checks if two entries are exactly equal, considering both types and values.

This check is strict and precise — it determines whether `T1` and `T2` are identical in structure and content.

---

### Signature

```ts
type Eq<T1, T2> = (<T>() => T extends T1 ? 0 : 1) extends (<T>() => T extends T2 ? 0 : 1) ? true : false;
```