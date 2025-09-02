export type PretextProps = {
    text: string;
    modifiers?: PretextTokenModifier[];
    language?: string;
    style?: Partial<React.CSSProperties>;
}

export type PretextTokenData = {
    content: string;
    type: string;
}

export type PretextTokenNode = React.FC<PretextTokenData>;

export type PretextTokenProps = {
    data: PretextTokenData;
    Node?: PretextTokenNode;
}

export type PretextTokenPredicate = (token: PretextTokenData) => boolean;

export type PretextTokenModifier = {
    predicate: PretextTokenPredicate;
    props: Partial<PretextTokenProps>;
}