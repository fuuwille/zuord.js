---
sidebar_label: Overview
title: Overview of Zuord
---

# Overview of Zuord

## The Need for Runtime Type Inference

Modern applications often require manipulating and transforming data dynamically at runtime. Common operations include merging objects, picking specific fields, or omitting others. Because these transformations happen at runtime, the resulting data shapes are not known at compile time. This creates a significant challenge for maintaining accurate and reliable type inference. Ensuring type safety during runtime data manipulation is essential for building robust applications.

## TypeScript’s Strengths and Limitations

TypeScript offers a powerful and flexible static type system that helps developers catch errors early, improve code readability, and maintainability. However, TypeScript cannot statically infer the types of data resulting from runtime transformations. Functions like `merge`, `pick`, and `omit` produce new data shapes dynamically, and TypeScript’s static analysis cannot fully track these changes. This limitation leaves a gap in type safety when working with runtime data manipulations.

## Popular Solution: Runtime Schemas and Their Limitations

To address this issue, many libraries rely on runtime schemas. Tools like Zod and Yup provide schema definitions that describe data structures explicitly and enable type inference based on those schemas. While effective, these approaches have drawbacks:

- They require verbose and repetitive schema definitions,  
- Introduce runtime overhead,  
- Reduce flexibility when dealing with highly dynamic or unpredictable data structures.

Therefore, schema-based solutions are not always ideal in dynamic scenarios.

## The Natural Solution: Zuord

Zuord, derived from the German word *zuordnen* meaning “to assign” or “to map,” is designed to solve this exact problem. Zuord offers a schema-free approach that synchronizes compile-time type inference with runtime data operations. This allows developers to perform complex, dynamic data transformations while maintaining full static type safety — without the need for explicit schema definitions.

## Why Zuord Is Unique

Zuord provides several unique advantages:

- Automatic and precise type inference for deeply nested and dynamic runtime operations,  
- Eliminates the need for manual type annotations or verbose schemas,  
- Maintains full runtime flexibility without sacrificing static type safety,  
- Seamlessly aligns TypeScript’s static analysis with runtime behavior in a natural and efficient way.

With Zuord, developers no longer have to choose between flexibility and type safety — they get both effortlessly.
