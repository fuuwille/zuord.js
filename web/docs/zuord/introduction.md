---
sidebar_label: Introduction
title: Introduction to Zuord
---

# Introduction to Zuord

## Motivation

Modern applications often involve complex and dynamic data transformations — merging structures, picking fields, omitting branches — all done at runtime.

Ensuring type safety in these operations is essential, yet challenging.

## The Limits of TypeScript

TypeScript provides strong and flexible type inference, enabling safer and more efficient software development. It catches errors early, improves editor tooling, and supports scalable refactoring.

However, it has a key limitation: **TypeScript cannot statically infer the result types of runtime data manipulations.**  
Functions like `merge`, `pick`, and `omit` produce new shapes based on dynamic input, and TypeScript’s static analysis isn’t designed to trace those shapes without explicit type annotations.

## Schema-Based Workarounds

To address this gap, many developers rely on **runtime schema libraries**. These tools (like Zod or Yup) define data structures explicitly and infer types from them.

While helpful, schema-driven approaches come with trade-offs:

- They require verbose and repetitive definitions  
- They introduce runtime overhead  
- They limit flexibility in truly dynamic scenarios  

## Enter Zuord

**Zuord** (from the German word *zuordnen*, meaning “to assign” or “map”) was created to solve this exact problem.

It is a highly abstracted library that enables **precise compile-time type inference for runtime operations — without requiring any schemas.** Zuord bridges the gap between runtime flexibility and static type safety.

## What Zuord Enables

- ⚡ **Deep and dynamic data transformations**, fully type-safe  
- 🧠 **Compile-time inference** of runtime operations  
- 🧩 **Schema-free development** with minimal boilerplate  
- 🧵 **Full alignment between runtime behavior and compile-time understanding**

> With Zuord, you don’t have to choose between flexibility and type safety — you get both, by default.