type Options<T extends OptionsData> = T;

type OptionsData = {
    ignored: object[]
}

export type { Options as ZuordOptions };
export type { OptionsData as ZuordOptionsData };