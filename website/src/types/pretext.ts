export type PretextProps = {
    text: string;
    modifiers?: PretextTokenModifier[];
    language?: Prism.Grammar;
    design?: {
        selectable?: boolean;
        preWrap?: boolean;
        style?: Partial<React.CSSProperties>;
    }
}

export type PretextTokenData = {
    content: string;
    color: string;
}

export type PretextTokenNode = React.FC<PretextTokenData>;

export namespace PretextTokenProps {
    export type Native = PretextTokenData & {
        Token?: PretextTokenNode;
    }

    export type Featured = PretextTokenProps.Native & {
        title: React.ReactNode;
    }

    export type Animated = PretextTokenProps.Native & {
        layout: React.ReactNode;
        stages: React.ReactNode[];
    }
}

export type PretextTokenPredicate = (content: string) => boolean;

export type PretextTokenModifier = {
    predicate: PretextTokenPredicate;
    props: Partial<PretextTokenProps.Native>;
}