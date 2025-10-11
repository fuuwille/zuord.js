import { Project } from "ts-morph";

export class Stash {
    #projects: Map<string, Project>;

    public constructor() {
        this.#projects = new Map();
    }
}