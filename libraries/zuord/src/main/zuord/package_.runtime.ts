import { $zuord } from "../../internal";
import { Zuord } from "..";

export function definePackage(definition: Zuord.PackageDefinition) {
    return $zuord.definePackage(definition);
}
