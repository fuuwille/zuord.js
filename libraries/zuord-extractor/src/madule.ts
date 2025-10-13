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