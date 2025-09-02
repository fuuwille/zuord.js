export type PretextProps = {
    text: string;
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
    node?: PretextTokenNode;
}

export type CodeTokenPredicate = (token: PretextTokenData) => boolean;

export type CodeTokenModifier = {
    predicate: CodeTokenPredicate;
    props: Partial<PretextTokenProps>;
}