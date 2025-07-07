type Plain = {
  [key: PropertyKey]: unknown;
};

type PlainOf<T> = [T] extends [never] ? unknown 
    : ([T] extends [Plain] ? T : unknown);

export type { Plain as ZuordPlain };

export type { PlainOf as ZuordPlainOf };