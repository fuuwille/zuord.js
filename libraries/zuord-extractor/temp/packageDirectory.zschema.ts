import { Package } from "./package.zschema";
import { PackageModule } from "./packageModule.zschema";

export type PackageDirectory = {
    package: Package;
    parent: PackageDirectory | null;
    name: string;
    directories: PackageDirectory[];
    modules: PackageModule[];
}