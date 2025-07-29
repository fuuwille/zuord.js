import * as IntegrateModule from "./integrate.types";
import * as MergeModule from "./merge.types";
import * as PickModule from "./pick.types";
import * as OmitModule from "./omit.types";
import * as ModeModule from "./mode.types";

export namespace InternalZuord {
    export import Integrate = IntegrateModule.Integrate;
    export import Merge = MergeModule.Merge;
    export import Pick = PickModule.Pick;
    export import Omit = OmitModule.Omit;
    export import Mode = ModeModule.Mode;
}