# Zuord  
**Advanced Type Utilities for TypeScript Power Users**

“Zuord” comes from the German word *zuordnen*, meaning “to assign”.  
This library helps you assign meaning and structure to your types — clearly, powerfully, and safely.

> _A lightweight utility type system that bridges the missing gaps in the TypeScript ecosystem, offering expressive, safe, and deeply composable typings._

---

## ✨ Why Zuord?

TypeScript provides great type safety, but when it comes to *type normalization*, *deep merging*, or *class vs plain object distinction*, it still leaves much to be desired. That’s where **Zuord** comes in.

With Zuord, you get:

- 📦 **Compile-time safety** for advanced object operations  
- ⚙️ **Zero runtime cost** — it's entirely static  
- 💡 **Better readability** with cleaner types  
- 🧩 **Highly composable utilities** like `Eq`, `Is`, `Exclude`, `Has`, `Extract`

Whether you're building complex libraries, type-driven APIs, or just want more expressive power in your TypeScript project — Zuord will likely save you hours of frustration.

---

## 🚧 Early Access Notice

Zuord is currently in an **early access** phase. While the foundations are solid, the API is still evolving and **not stable**.

At this stage, **contributions are not being accepted**, unless explicitly stated otherwise.  
However, **feedback, suggestions, and issue reports are highly welcome** and will be taken into consideration with great care.

---

## 📦 Installation

```bash
npm install zuord@0.1.1-alpha
```

## Quick example
Deeply merge types — with zero schemas and fully inferred results.
Just hover over merged to see the full, static type.

```ts
// 🧠 No schema, no casting — fully inferred deep merge:
const merged = zuord.merge(
  { user: { name: "Alice", meta: { age: 30, hobbies: ["reading"] } }, active: true },
  { user: { id: 42, meta: { hobbies: ["gaming"], verified: false } }, tags: ["admin"] },
  { user: { registeredAt: new Date() }, settings: { theme: "dark" } }
);
```

✅ Hover to see the full static type:

```ts
const merged: {
    user: {
        name: string;
        meta: {
            age: number;
            hobbies: string[];
            verified: boolean;
        };
        id: number;
        registeredAt: Date;
    };
    active: boolean;
    tags: string[];
    settings: {
        theme: string;
    };
}
```

Also, classes are not normalized (expressed by name) because Zuord clearly distinguishes between class instances and plain objects.