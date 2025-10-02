import { ModuleFile } from "./moduleFile";
import { ModuleContent } from "./moduleContent";

export type Module = {
    name: string;
    schemaFile: ModuleFile.Schema | null;
    variantsFile: ModuleFile.Variants | null;
    schemaContents: ModuleContent.SchemaContent[];
    variantContents: ModuleContent.VariantContent[];
}

export enum ModuleMode {
    Schema = "tschema",
    Variants = "tvariants"
}