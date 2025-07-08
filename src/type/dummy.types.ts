import { ZuordType } from "./_alias.types";

type Dummy = { __brand: 'dummy' };

type DummyOf<T extends ZuordType.Plain> = T & Dummy;

export type { Dummy as ZuordDummy };

export type { DummyOf as ZuordDummyOf };