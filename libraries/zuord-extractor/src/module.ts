import { file, File, FileBase, FileExtension, FileSchemaExtension, FileType, FileVariantExtension, getExtension } from "./file";
import { content, Content } from "./content";
import { member } from "./member";
import { diagnostic } from "./diagnostic";

export class ModuleContext {
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

    //

    public getFile(extension: FileExtension) : FileBase | undefined {
        switch(extension) {
            case FileExtension.TS:
                return this.#bundle.main.file.schema ?? undefined;
            case FileExtension.TZS:
                return this.#bundle.nest.file.schema ?? undefined;
            case FileExtension.TZU:
                return this.#bundle.main.file.variant ?? undefined;
            case FileExtension.TZV:
                return this.#bundle.nest.file.variant ?? undefined;
            default:
                return undefined;
        }
    }
}

export class ModuleBundle {
    #context: ModuleContext
    #type: ModuleBundleType;
    #file: ModuleFileRecord;
    #content: ModuleContentRecord;

    constructor(context: ModuleContext, type: ModuleBundleType) {
        this.#context = context;
        this.#type = type;

        const $file : ModuleFileRecord = this.#file = {
            schema: file.extractSchema(context.location, context.name, getExtension(FileType.Schema, type) as FileSchemaExtension) ?? null,
            variant: file.extractVariant(context.location, context.name, getExtension(FileType.Variant, type) as FileVariantExtension) ?? null
        };
        const $content : ModuleContentRecord = this.#content = {
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

        $content.schemas = schemaContents;
        $content.variants = variantContents;
    }

    public get context(): ModuleContext {
        return this.#context;
    }

    public get type() : ModuleBundleType {
        return this.#type;
    }

    public get file() : ModuleFileRecord {
        return this.#file;
    }

    public get content() : ModuleContentRecord {
        return this.#content;
    }
}

export enum ModuleBundleType {
    Main,
    Nest
}

export type ModuleBundleRecord = {
    main: ModuleBundle;
    nest: ModuleBundle;
}

//

export type ModuleFileRecord = {
    schema: File.Schema | null;
    variant: File.Variant | null;
}

export type ModuleContentRecord = {
    schemas: Content.Schema[];
    variants: Content.Variant[];
}