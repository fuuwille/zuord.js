---
sidebar_label: Introduction
---

# Introduction to Zuord Util

## Overview

**Zuord Util** is a robust and type-safe utility library that provides a broad range of helper functions for JavaScript and advanced type utilities for TypeScript, designed specifically for use in modern JS/TS projects.

The library makes type operations more readable and manageable, covering both simple and complex use cases while reducing repetitive and error-prone code. It also provides clear, consistent, and efficient tools that accelerate development and enhance code quality, making it easier to build maintainable and robust applications within the JS/TS ecosystem.

## Purpose

It aims to help developers write clearer, safer, and more maintainable code by reducing repetitive patterns and standardizing common type checks and utilities. This eliminates the need to recreate the same solutions across different projects.

By providing reliable and reusable tools, Zuord Util streamlines type-related workflows, improves developer productivity, and ensures consistent type safety throughout the codebase.

## References

Zuord Util organizes its utilities into the following categories, covering both type-level operations and runtime functions:

- **[Eq](./references/eq/)**  
  Utilities and functions for checking exact equality between types or values.  
  _Check: `T1 === T2`_

- **[Is](./references/is/)**  
  Utilities and functions to verify whether one type extends another or whether a value conforms to a type.  
  _Check: `TSource extends TBase`_

- **[Has](./references/has/)**  
  Utilities and functions that determine if a type or value includes another, including membership within unions.  
  _Check: `TSource extends any ? (TSource extends TBase)`_

- **[Exclude](./references/exclude/)**  
  Utilities and functions to remove types or values matching a certain criterion from unions or objects.  
  _Effect: Removes matching parts from the source._

- **[Extract](./references/extract/)**  
  Utilities and functions to extract types or values matching a specific pattern from unions or objects.  
  _Effect: Selects matching parts from the source._

## Features
- **Type safety:** Ensures compile-time type correctness and reduces runtime errors.  
- **High performance:** Optimized implementations with zero runtime type inference overhead.  
- **Seamless integration:** Easily integrates with existing TypeScript and JavaScript projects.  
- **Improves code quality:** Reduces boilerplate and promotes consistent type checking patterns.  