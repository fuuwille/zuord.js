---
sidebar_label: References
title: Utility References
---

# Utility References

Zuord Util organizes its utilities into the following categories, covering both type-level operations and runtime functions:

- **[Eq](./eq/)**  
  Utilities and functions for checking exact equality between types or values.  
  _Check: `T1 === T2`_

- **[Is](./is/)**  
  Utilities and functions to verify whether one type extends another or whether a value conforms to a type.  
  _Check: `TSource extends TBase`_

- **[Has](./has/)**  
  Utilities and functions that determine if a type or value includes another, including membership within unions.  
  _Check: `TSource extends any ? (TSource extends TBase)`_

- **[Exclude](./exclude/)**  
  Utilities and functions to remove types or values matching a certain criterion from unions or objects.  
  _Effect: `Removes matching parts from the source.`_

- **[Extract](./extract/)**  
  Utilities and functions to extract types or values matching a specific pattern from unions or objects.  
  _Effect: `Selects matching parts from the source.`_