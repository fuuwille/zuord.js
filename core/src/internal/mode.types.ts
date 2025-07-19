type Mode = LiteMode & ShallowMode;

type LiteMode = {
    lite : boolean;
};

type ShallowMode = {
    shallow: boolean;
};

type DefaultMode = {
    lite: false;
    shallow: false;
};

export type { Mode as ZuordMode };
export type { LiteMode as ZuordLiteMode };
export type { ShallowMode as ZuordShallowMode };
export type { DefaultMode as ZuordDefaultMode };