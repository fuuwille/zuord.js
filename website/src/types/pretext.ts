export type PretextProps = {
    text: string;
    modifiers?: PretextTokenModifier[];
    language?: Prism.Grammar;
    design?: {
        selectable?: boolean;
        style?: Partial<React.CSSProperties>;
    }
}

export type PretextTokenData = {
    content: string;
    color: string;
}

export type PretextTokenNode = React.FC<PretextTokenData>;

export type PretextTokenProps = PretextTokenData & {
    Node?: PretextTokenNode;
}

export type PretextTokenPredicate = (content: string) => boolean;

export type PretextTokenModifier = {
    predicate: PretextTokenPredicate;
    props: Partial<PretextTokenProps>;
}