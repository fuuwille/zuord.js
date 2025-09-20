import { Module } from "./module.model";

export const extractModule = (dir: string, name: string): Module => {
    return {
        name,
        nodes: [],
    };
};