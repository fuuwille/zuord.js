import { $ZuordUtil } from "../internal";

export namespace Union {
    export type ToIntersection<U> = $ZuordUtil.Union.ToIntersection<U>;

    export type ToLast<U> = $ZuordUtil.Union.ToLast<U>;

    export type ToTuple<U> = $ZuordUtil.Union.ToTuple<U>;
}