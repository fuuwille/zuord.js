# Schema-less Harmony Between Runtime and Types

**Zuord** (from the German word for "assign" or "map") is a TypeScript-first toolkit for deep object operations, offering fully synchronized type inference — at both runtime and compile time.

<br>

<p align="center">
  Visit the early access documentation: 
  <a href="https://www.zuordjs.org">zuordjs.org</a>
</p>

## Quick Start

### Install Zuord (Alpha)

via npm:
```bash
npm install zuord@latest
```

or pnpm:
```bash
pnpm add zuord@latest
```

### Basic Usage

**Try Zuord (Alpha) on [Stackblitz](https://stackblitz.com/edit/zuord?file=index.ts)** 👈


```ts
import { zuord, zuordX } from "zuord";
import type { Zuord, ZuordX } from "zuord";

const obj1 = { a: 1, b: { x: 10 } };
const obj2 = { b: { y: 20 }, c: 3 };

const merged = zuord.merge([obj1, obj2]);
// merged: { a: number, b: { x: number, y: number }, c: number }

const integrated = zuordX.integrate.plain.loose(obj1, obj2);
// merged: { a: number, b: { x: number, y: number }, c: number }

type Merged = Zuord.Merge<[typeof obj1, typeof obj2]>;
// Merged = { a: number, b: { x: number, y: number }, c: number }

type Integrated = ZuordX.Integrate.Plain.Loose<typeof obj1, typeof obj2>;
// Integrated = { a: number, b: { x: number, y: number }, c: number }
```

<br/>

### Contact With Me
- [Discord](https://discord.gg/nYTUyETH)
