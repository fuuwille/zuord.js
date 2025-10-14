import { File } from "./file";
import { Content } from "./content";

export class Module {
    #name: string;

    constructor(name: string) {
        this.#name = name;
    }

    //

    get name(): string {
        return this.#name;
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

export class ModulePair extends ModuleObject {
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

export class ModuleEntry extends ModulePair {
    #pair: ModulePair

    constructor(pair: ModulePair) {
        super(pair.module);
        this.#pair = pair;
    }

    get pair(): ModulePair {
        return this.#pair;
    }
}

export class ModuleFile extends ModuleEntry {
    #schema: File.Schema | undefined;
    #variant: File.Variant | undefined;

    constructor(pair: ModulePair) {
        super(pair);
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

    constructor(pair: ModulePair) {
        super(pair);
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