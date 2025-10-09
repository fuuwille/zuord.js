import { PackageModule } from "./packageModule.zschema";

export type PackageDirectory = {
    name: string;
    modules: PackageModule[];
}