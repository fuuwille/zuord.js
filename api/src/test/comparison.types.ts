type Comparison = {
    type : unknown;
    expected : unknown;
}

type ComparisonSelf<T> = {
    type : T;
    expected : T;
}

type ComparisonSelfList<U extends unknown[]> = {
    [K in keyof U]: ComparisonSelf<U[K]>;
}

export type { Comparison as ZuordComparison };

export type { ComparisonSelf as ZuordComparisonSelf };

export type { ComparisonSelfList as ZuordComparisonSelfList };