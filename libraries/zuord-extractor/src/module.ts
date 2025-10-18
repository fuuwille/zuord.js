import { file, File, FileSchemaExtension, FileType, FileVariantExtension, getExtension } from "./file";
import { content, Content } from "./content";
import { member } from "./member";
import { diagnostic } from "./diagnostic";

export class Module {
    #location: string; #name: string;
    #set: Record<"main" | "nest", ModuleSet>;

    constructor(location: string, name: string) {
        this.#location = location;
        this.#name = name;

        this.#set = {
            main: new ModuleSet(this, ModuleSetType.Main),
            nest: new ModuleSet(this, ModuleSetType.Nest)
        };
    }

    //

    public get location() {
        return this.#location;
    }

    public get name() {
        return this.#name;
    }

    public get set() {
        return this.#set;
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

export class ModuleSet extends ModuleObject {
    #type: ModuleSetType;
    #file: ModuleFile | undefined;
    #content: ModuleContent | undefined;

    constructor(module: Module, type: ModuleSetType) {
        super(module);
        this.#type = type;

        this.#file = new ModuleFile(this);
        this.#content = new ModuleContent(this);
    }

    get type(): ModuleSetType {
        return this.#type;
    }

    get file(): ModuleFile | undefined {
        return this.#file;
    }

    get content(): ModuleContent | undefined {
        return this.#content;
    }
}

export enum ModuleSetType {
    Main,
    Nest
}

export class ModuleEntry extends ModuleObject {
    #set: ModuleSet

    constructor(set: ModuleSet) {
        super(set.module);
        this.#set = set;
    }

    get set(): ModuleSet {
        return this.#set;
    }
}

export class ModuleFile extends ModuleEntry {
    #schema: File.Schema | undefined;
    #variant: File.Variant | undefined;

    constructor(set: ModuleSet) {
        super(set);

        const type = set.type;
        const module = set.module;

        this.#schema = file.extractSchema(module.location, module.name, getExtension(FileType.Schema, type) as FileSchemaExtension) ;
        this.#variant = file.extractVariant(module.location, module.name, getExtension(FileType.Variant, type) as FileVariantExtension) ;
    }

    get schema(): File.Schema | undefined {
        return this.#schema;
    }

    get variant(): File.Variant | undefined {
        return this.#variant;
    }
}

export class ModuleContent extends ModuleEntry {
    #schemas: Content.Schema[];
    #variants: Content.Variant[];

    constructor(set: ModuleSet) {
        super(set);

        this.#schemas = [];
        this.#variants = [];

        const file = set.file!;
    
        const schemaMembers = file.schema?.members;
        const variantMembers = file.variant?.members;

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
    }

    get schemas(): Content.Schema[] {
        return this.#schemas;
    }

    get variants(): Content.Variant[] {
        return this.#variants;
    }
}