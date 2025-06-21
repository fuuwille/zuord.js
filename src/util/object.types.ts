type IsObject<T> = 
  [T] extends [object] ? (
    T extends Function ? (
      false
    ) : T extends any[] ? (
      false
    ): true
  ) : false;

export type { IsObject as ZuordIsObject }