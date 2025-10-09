import { ModuleFile } from "./moduleFile";
import { ModuleContent } from "./moduleContent";

export type PackageModule = {
    name: string;
    schemaFile: ModuleFile.Schema | null;
    variantsFile: ModuleFile.Variants | null;
    schemaContents: ModuleContent.Schema[];
    variantContents: ModuleContent.Variant[];
}