# Zuord

> **Note:** This is an early access release and does **not** guarantee API stability.
> **Also Note:** Unfortunately, contributions will not be accepted unless stated otherwise.

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
npm install zuord@0.1.0-alpha
```

<br/><br/>

# Samples

Let's merge several plain objects and observe how the compiler infers the resulting type.

```typescript
const mergedObject = zuord.merge(
  { hahah: 1, b: 2, hello: { a: {a : new Date()}, b: 2 }, cici: [[[true]], ["stringg"]]},
  { hahah: "falsseeee", c: 4 },
  { b: 5, d: 6, hello: { a: {b: "s"}, c: 4 } },
  { hahah: () => null },
  { hahah: "string", cici: [[1, 2, [3, 2]], ["cici", 3]] }
);
```

In the TypeScript ecosystem, most popular libraries either leave the merged object's type as any or provide limited type inference.
Zuord, however, offers natural and precise type inference without compromising performance.

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

As demonstrated, types are inferred naturally without requiring explicit schemas.