---
sidebar_label: Introduction
title: Introduction to Zuord
---

# Introduction to Zuord

# Zuord

Zuord (from the German word for 'assign' or 'map') is a highly abstracted library that enables compile-time type inference for runtime operations without requiring schema definitions.

## The Power and Limits of TypeScript

TypeScript provides strong and flexible type inference, enabling safer and more efficient software development. It helps prevent errors during coding and offers features like autocomplete and easy refactoring.

However, TypeScript has a key limitation: **it cannot statically infer return types of runtime data manipulations.** Especially in functions like merge, pick, and omit, static type checking becomes difficult when types depend on runtime data shapes.

## Existing Solutions: Runtime Schemas

Many solutions address this limitation by relying on explicitly defined runtime schemas. Schemas describe the data structure and enhance type safety for transformation operations. But these approaches:

- Require manual schema definitions,  
- Are less suited for dynamic and flexible data structures,  
- Can increase code complexity.

## What Zuord Brings

Zuord offers a solution that **synchronizes compile-time static type inference with runtime data manipulations without requiring schema definitions.** This means:

- Full type safety in dynamic and deep data operations,  
- Automatic, schema-free type inference,  
- Preserves TypeScript’s flexibility while aligning runtime and compile-time types.