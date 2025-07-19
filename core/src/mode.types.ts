export type FlagMode<K extends string> = {
    [P in K]: boolean;
}

export type ShallowMode = FlagMode<"shallow">;