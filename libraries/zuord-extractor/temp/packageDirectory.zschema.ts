import { PackageModule } from "./packageModule.zschema";

export type PackageDirectory = {
    name: string;
    directories: PackageDirectory[];
    modules: PackageModule[];
}