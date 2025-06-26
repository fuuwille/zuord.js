type Mode = string | undefined;

type LiteMode = {
    lite : true;
};

type ShallowMode = {
    shallow: true;
};

type DefaultMode = {
    lite: false;
    shallow: false;
};

export type { Mode as ZuordMode };
export type { LiteMode as ZuordLiteMode };
export type { ShallowMode as ZuordShallowMode };
export type { DefaultMode as ZuordDefaultMode };