import { Module } from "./module";

const stash = new Map<string, Module>();

export const getModule = (name: string) => {
    return stash.get(name);
}