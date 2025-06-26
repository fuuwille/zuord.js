type Mode = string | undefined;

type LiteMode = "lite";

type ShallowMode = "shallow";

type PartialMode = Partial<Mode>;

type DefaultMode = undefined;

export type { Mode as ZuordMode };
export type { PartialMode as ZuordPartialMode };
export type { LiteMode as ZuordLiteMode };
export type { ShallowMode as ZuordShallowMode };
export type { DefaultMode as ZuordDefaultMode };