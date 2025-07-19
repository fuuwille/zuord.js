export type Mode = LiteMode & ShallowMode;

export type LiteMode = {
    lite : boolean;
};

export type ShallowMode = {
    shallow: boolean;
};

export type DefaultMode = {
    lite: false;
    shallow: false;
};