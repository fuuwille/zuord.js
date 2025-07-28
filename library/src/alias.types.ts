import { Integrate as IntegrateModule } from "./integrate.types";
import { Merge as MergeModule } from "./merge.index";

export namespace Zuord {
    export import Integrate = IntegrateModule;
    export import Merge = MergeModule;
}