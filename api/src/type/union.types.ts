import { ZuordType } from "./_alias.types";

type UnionOf<U extends ZuordType.Tuple> = U[number]

export type { UnionOf as ZuordUnionOf };