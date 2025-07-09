# Zuord

> **Note:** This is an early access release and does **not** guarantee API stability.

---

## Overview

Zuord is the most powerful utility type system designed to fill critical gaps in the TypeScript ecosystem.  
It enables precise compile-time type differentiation and normalization to enhance type safety and developer experience.

---

## Key Features

- **Advanced Normalization:** Streamlines complex types into clean, optimized forms.  
- **Class vs. Plain Object Differentiation:** Accurately distinguishes between class instances and plain objects.  
- **Robust Utility Types:** Includes essential helpers like `Eq`, `Is`, `Has`, `Exclude`, and `Extract` for expressive and precise type logic.  

---

## Installation

```bash
npm install zuord
```

<br/><br/>

# Samples

Let's merge several plain objects and see if the compiler can deduce the type.

```typescript
const mergedObject = zuord.merge(
  { hahah: 1, b: 2, hello: { a: {a : new Date()}, b: 2 }, cici: [[[true]], ["stringg"]]},
  { hahah: "falsseeee", c: 4 },
  { b: 5, d: 6, hello: { a: {b: "s"}, c: 4 } },
  { hahah: () => null },
  { hahah: "string", cici: [[1, 2, [3, 2]], ["cici", 3]] }
);
```

In the typescript ecosystem, all popular libraries prefer to leave the type of mergedObject as any or do not perform type inference.
But zuord provides type inference naturally without performance concerns.

The result:

```typescript
const mergedObject: {
    hahah: string;
    b: number;
    hello: {
        a: {
            a: Date;
            b: string;
        };
        b: number;
        c: number;
    };
    cici: (string | number | (number | boolean)[])[][];
    c: number;
    d: number;
}
```

As can be seen, we can naturally extract types without using a schema.