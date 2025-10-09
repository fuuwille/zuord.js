import { PackageDirectory } from "./packageDirectory.zschema";

export interface Package {
    path: string;
    root: PackageDirectory;
}