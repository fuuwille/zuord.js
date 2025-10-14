import { File } from "./file";
import { Content } from "./content";

export class Module {
    #location: string; #name: string;
    #main: ModuleSet | undefined;
    #nest: ModuleSet | undefined;

    constructor(location: string, name: string) {
        this.#location = location;
        this.#name = name;

        this.#main = new ModuleSet(this, ModuleSetType.Main);
        this.#nest = new ModuleSet(this, ModuleSetType.Nest);
    }

    //

    get location(): string {
        return this.#location;
    }

    get name(): string {
        return this.#name;
    }

    get main(): ModuleSet | undefined {
        return this.#main;
    }

    get nest(): ModuleSet | undefined {
        return this.#nest;
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
    }

    get schemas(): Content.Schema[] {
        return this.#schemas;
    }

    get variants(): Content.Variant[] {
        return this.#variants;
    }
}