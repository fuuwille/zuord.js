type Eq<A, B> = (<T>() => T extends A ? 0 : 1) extends (<T>() => T extends B ? 0 : 1) ? true : false;

type Is<A, B> = [A] extends [B] ? true : false;

export type { Eq as ZuordEq };

export type { Is as ZuordIs };