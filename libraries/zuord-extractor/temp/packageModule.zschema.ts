import { ModuleFile } from "./moduleFile";
import { ModuleContent } from "./moduleContent";
import { PackageDirectory } from "./packageDirectory.zschema";

export type PackageModule = {
    name: string;
    directory: PackageDirectory;
    schemaFile: ModuleFile.Schema | null;
    variantsFile: ModuleFile.Variants | null;
    schemaContents: ModuleContent.Schema[];
    variantContents: ModuleContent.Variant[];
}