import { Integrate as IntegrateModule } from "./integrate.index";
import { Merge as MergeModule } from "./merge.index";

export namespace Zuord {
    export import Integrate = IntegrateModule;
    export import Merge = MergeModule;
}