import { $Zuord } from "../../../internal";
import { ZuordModeX } from "../../mode";
import { ZuordType } from "@zuord/type";
import { ZuordUtil } from "@zuord/util";

export declare namespace Plain {
    export type Loose<T extends ZuordType.Plain, P extends ZuordUtil.Pattern.Plain<T>, _TMode extends Partial<ZuordModeX.Pick.Plain> = {}> = $Zuord.Pick.Plain<T, P>;
}