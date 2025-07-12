---
sidebar_label: Motivation
title: Motivation of Zuord
---

# Motivation of Zuord

### Power and Limitations of TypeScript
TypeScript provides flexible and reliable type inference that helps catch errors early and improves overall code quality. Its static type system automatically understands many types during development. For example:

However, when dealing with complex data operations like deep manipulations, TypeScript struggles. Dynamic actions such as merge, omit, or pick return any or lose precise type information, creating significant gaps in type safety.

In practice, many runtime utilities used for deep data manipulations—such as merging, picking, or omitting properties—offer flexible ways to transform objects. However, even though these tools aim to preserve type information, TypeScript’s inference often becomes imprecise or overly broad with complex or deeply nested operations. As a result, the exact resulting types may not be fully known at compile time, which weakens type safety in real-world applications.

### The Effect of Type Loss to Developer
In many TypeScript projects, deep data manipulations often cause original type information to be lost or blurred. Examples like merging objects (merge), removing fields (omit), or picking properties (pick) make it difficult for TypeScript to fully infer types during compilation. This loss of type information increases the risk of bugs and challenges the reliability of applications. As a result, safely managing complex and dynamic data structures becomes a serious challenge.

### Existing Solutions and Their Drawbacks
Popular libraries often address runtime data manipulation through utility functions or schema-driven validation systems. While helpful, many of these tools rely heavily on TypeScript’s intersection (&) types when combining structures—especially during deep merging operations.

This approach has critical limitations:

- **Overuse of `&` Leads to Unrealistic Types**  
  Combining two object types using `A & B` assumes that all fields from both types will always coexist at runtime.  
  However, in practice, merge operations often override fields. The resulting runtime shape does not reflect this intersection, creating a mismatch between type and reality.

- **Problematic with Arrays**  
  In deeply nested structures, merging two different array types (e.g. `string[]` and `number[]`) results in a type like `string[] & number[]`, which is logically impossible—no value can simultaneously be both.  
  This makes the resulting type unusable or misleading:

```ts
const merged: string[] & number[]; // ← unusable
```

- Optional Fields Become Unsafe
In deeply nested structures with optional properties, TypeScript’s default merge typing does not guarantee their presence. The type system may indicate a field exists, but it can still be undefined or missing due to the runtime behavior of merging:

```ts
type A = { settings?: { theme: string } };
type B = { settings: { mode: string } };
const merged : { settings: { theme: string, mode: string } };; // TypeScript: A & B — but `theme` is not safe
```