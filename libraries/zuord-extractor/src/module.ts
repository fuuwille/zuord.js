import { file, File, FileSchemaExtension, FileType, FileVariantExtension, getExtension } from "./file";
import { content, Content } from "./content";
import { member } from "./member";
import { diagnostic } from "./diagnostic";

export class Module {
    #location: string; #name: string;
    #bundle: ModuleBundleRecord;

    constructor(location: string, name: string) {
        this.#location = location;
        this.#name = name;

        this.#bundle = {
            main: new ModuleBundle(this, ModuleBundleType.Main),
            nest: new ModuleBundle(this, ModuleBundleType.Nest)
        };
    }

    //

    public get location() : string {
        return this.#location;
    }

    public get name() : string {
        return this.#name;
    }

    public get bundle() : ModuleBundleRecord {
        return this.#bundle;
    }
}

export class ModuleObject {
    #module: Module

    constructor(module: Module) {
        this.#module = module;
    }

    //

    get module(): Module {
        return this.#module;
    }
}

export class ModuleBundle extends ModuleObject {
    #type: ModuleBundleType;
    #file: ModuleFileRecord;
    #content: { schemas: Content.Schema[]; variants: Content.Variant[] };

    constructor(module: Module, type: ModuleBundleType) {
        super(module);
        this.#type = type;

        const $file = this.#file = {
            schema: file.extractSchema(module.location, module.name, getExtension(FileType.Schema, type) as FileSchemaExtension) ?? null,
            variant: file.extractVariant(module.location, module.name, getExtension(FileType.Variant, type) as FileVariantExtension) ?? null
        };
        const $content = this.#content = {
            schemas: [],
            variants: []
        };
    
        const schemaMembers = $file.schema?.members;
        const variantMembers = $file.variant?.members;

        const schemaContents = [];
        const variantContents = [];

        if(schemaMembers) {
            for(const schemaMember of schemaMembers.filter(member.isSchemaLike)) {
                const schemaContent = content.createSchema(schemaMember);
                content.updateName(schemaContent);
    
                schemaContents.push(schemaContent);
            }
        }
    
        if(variantMembers) {
            for(const variantMember of variantMembers.filter(member.isVariantLike)) {
                const variantContent = content.createVariant(variantMember);
                content.updateName(variantContent);

                variantContents.push(variantContent);
            }
        }
    
        if(variantContents.length > 0) {
            for(const variantContent of variantContents) {
                const schema = content.getVariantSchema(variantContent, schemaContents);
    
                if(schema) {
                    variantContent.schema = schema;
    
                    schema.variants ??= [];
                    schema.variants.push(variantContent);
                }
    
                if(content.isFunctionalVariant(variantContent)) {
                    const memberFL = member.asFunctionLike(variantContent.member);

                    const returnNode = memberFL?.returnType;

                    if(!returnNode) {
                        variantContent.diagnostics ??= [];
                        variantContent.diagnostics.push(
                            diagnostic.buildInDiagnostics.noReturnType(variantContent.member.nameNode!)
                        );
                    }
                }
            }
        }

        // @ts-ignore
        $content.schemas = schemaContents;

        // @ts-ignore
        $content.variants = variantContents;
    }

    get type(): ModuleBundleType {
        return this.#type;
    }

    get file() {
        return this.#file;
    }

    get content() {
        return this.#content;
    }
}

export enum ModuleBundleType {
    Main,
    Nest
}

export type ModuleBundleRecord = Record<"main" | "nest", ModuleBundle>;

//

export type ModuleFileRecord = {
    schema: File.Schema | null;
    variant: File.Variant | null;
}