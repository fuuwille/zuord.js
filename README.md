# Schema-less Harmony Between Runtime and Types

**Zuord** (German for 'assign' or 'map') is a TypeScript library for deep object manipulations and type inferences, fully synchronizing runtime functions with compile-time types.

<br/>

> *"Zuord starts where other libraries set their limits. With its schema-less architecture, it provides practical solutions to complex problems that many existing tools struggle with. In terms of performance, type inference, and usability, it technically outshines most of its competitors."*

<div align="right"><em>k4yr2 — <strong>Zuord Creator</strong></em></div>

<br/>

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

👉 **Try Zuord (Alpha) on Playground:**  
- [Stackblitz](https://stackblitz.com/edit/zuord?file=index.ts)


```ts
import { zuord, zuordX } from "zuord";
import type { Zuord, ZuordX } from "zuord";

// zuord, zuordX for Runtime
// Zuord, ZuordX for Types

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

## Documentation

<p align="center">
  Visit the early access documentation: 
  <a href="https://www.zuordjs.org">zuordjs.org</a><br/>
</p>


### Contact With Me
- [Discord](https://discord.gg/nYTUyETH)