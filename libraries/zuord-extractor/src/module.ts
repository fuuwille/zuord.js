import { File } from "./file";
import { Content } from "./content";

export class Module {
    #name: string;
    #primary: ModuleSet | undefined;
    #secondary: ModuleSet | undefined;

    constructor(name: string) {
        this.#name = name;
    }

    //

    get name(): string {
        return this.#name;
    }

    get primary(): ModuleSet | undefined {
        return this.#primary;
    }

    get secondary(): ModuleSet | undefined {
        return this.#secondary;
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
    #file: ModuleFile | undefined;
    #content: ModuleContent | undefined;

    constructor(module: Module) {
        super(module);
    }

    get file(): ModuleFile | undefined {
        return this.#file;
    }

    get content(): ModuleContent | undefined {
        return this.#content;
    }
}

//

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