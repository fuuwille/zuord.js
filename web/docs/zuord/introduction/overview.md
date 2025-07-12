---
sidebar_label: Motivation
title: Motivation of Zuord
---

# Motivation of Zuord

## Why Runtime Type Inference Matters?

Modern applications frequently manipulate complex and dynamic data at runtime. Operations like merging objects, selecting specific fields, or omitting properties are common. However, because these transformations occur during execution, the resulting data types are not known at compile time. This creates a significant challenge in maintaining type safety throughout the development process.

## The Strengths and Limitations of TypeScript

TypeScript offers robust static typing and flexible type inference, helping developers catch errors early and improve code quality. Despite this, TypeScript cannot fully infer types for results of runtime data manipulations such as `merge`, `pick`, or `omit`. This gap leaves room for type safety issues in real-world applications where data shapes frequently change.

## Existing Solutions and Their Drawbacks

To bridge this gap, many developers use runtime schema libraries like Zod or Yup. These tools define explicit schemas that describe data shapes and provide type inference from those schemas. While effective, they often require verbose definitions, add runtime overhead, and limit flexibility when dealing with highly dynamic or unpredictable data structures.

## The Need for a Better Approach

The ideal solution would provide precise static type inference aligned with runtime operations without requiring explicit schemas or excessive boilerplate. This would enable developers to maintain type safety while enjoying the flexibility of dynamic data transformations.

## Zuord’s Role

Zuord addresses this need by synchronizing compile-time types with runtime data manipulations without requiring schemas. It enables full type safety in dynamic, deep data operations while preserving TypeScript’s flexibility — closing a longstanding gap in static typing for runtime transformations.

---

With Zuord, developers no longer have to compromise between flexibility and type safety.