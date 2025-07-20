import { ZuordCore } from ".";
import { internalZuordCore as internal } from "./internal";

export function modeField <K extends string>(key: K, value?: boolean) : ZuordCore.ModeField<K>

export function modeField <K extends string>(key: K[], value?: boolean) : ZuordCore.ModeField<K>

export function modeField <K extends string>(key: K | K[], value?: boolean) : ZuordCore.ModeField<K>;

export function modeField <K extends string>(key: K | K[], value: boolean = false) : ZuordCore.ModeField<K> {
    return internal.modeField(key, value);
}

export function modeResolve <const TModes extends ZuordCore.ModeField[]>(modes: TModes): ZuordCore.ModeResolve<TModes> {
    return internal.modeResolve(modes);
};

export const shallowMode: ZuordCore.ShallowMode = internal.shallowMode;

export const concatMode: ZuordCore.ConcatMode = internal.concatMode;

export const defaultMode: ZuordCore.BaseMode = internal.defaultMode;