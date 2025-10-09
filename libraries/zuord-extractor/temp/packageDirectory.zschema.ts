import { Package } from "./package.zschema";
import { PackageModule } from "./packageModule.zschema";

export type PackageDirectory = {
    package: Package;
    name: string;
    directories: PackageDirectory[];
    modules: PackageModule[];
}