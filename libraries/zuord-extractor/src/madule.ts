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