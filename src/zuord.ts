import { isObject } from "./utils/isObject";
import { ZuordMerge } from "./zuordMerge";
import { ZuordOmit } from "./zuordOmit";
import { ZuordPick } from "./zuordPick";
import { ZuordSchema } from "./zuordSchema";

export class zuord {
    private constructor() {
    }
}

export default zuord;

//

export type { ZuordMerge as ZuordContent } from "./zuordMerge";
export type { ZuordPick, ZuordPickOf } from "./zuordPick";
export type { ZuordOmit, ZuordOmitOf } from "./zuordOmit";
export type { ZuordSchema, IsZuordSchema } from "./zuordSchema";
export { zuordSchema } from "./zuordSchema";