import { FileSpec } from "./file";

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
    constructor(module: Module) {
        super(module);
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
    #schema: FileSpec.Schema | undefined;
    #variants: FileSpec.Variants | undefined;

    constructor(pair: ModulePair) {
        super(pair);
    }

    get schema(): FileSpec.Schema | undefined {
        return this.#schema;
    }

    get variants(): FileSpec.Variants | undefined {
        return this.#variants;
    }
}

export class ModuleContent extends ModuleEntry {
    constructor(pair: ModulePair) {
        super(pair);
    }
}