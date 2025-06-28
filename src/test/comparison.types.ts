type Comparison = {
    type : unknown;
    expected : unknown;
}

type ComparisonSelf<T> = {
    type : T;
    expected : T;
}

export type { Comparison as ZuordComparison };

export type { ComparisonSelf as ZuordComparisonSelf };