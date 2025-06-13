import { ZuordContent } from "./zuordChain";

export class zuord {
    private constructor() {
    }

    //

    public static assign<U extends object[]>(...rest: U): ZuordContent<U> {
        const mergedRest = Object.assign({}, ...rest);
        return mergedRest as ZuordContent<U>;
    }
}

export default zuord;