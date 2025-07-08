type Is<T1, T2> = [T1] extends [T2] ? true : false;

export type { Is as ZuordIs };