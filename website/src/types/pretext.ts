export type PretextProps = {
    text: string;
    modifiers?: PretextTokenModifier[];
    language?: Prism.Grammar;
    design?: {
        selectable?: boolean;
        preWrap?: boolean;
        flatten?: boolean;
        style?: Partial<React.CSSProperties>;
    }
}

export type PretextTokenData = {
    content: string;
    tips?: React.FC;
    style?: Partial<React.CSSProperties>;
}

export type PretextTokenNode = React.FC<PretextTokenData>;

export namespace PretextTokenProps {
    export type Native = PretextTokenData & {
        Body: PretextTokenNode;
    }

    export type Animated = PretextTokenProps.Native & {
        layout: React.ReactNode;
        stages: React.ReactNode[];
    }

    export type Diff = PretextTokenProps.Native & {
        level: "origin" | "modified" | "added";
    }
}

export type PretextTokenPredicate = (content: string) => boolean;

export type PretextTokenModifier = {
    predicate: PretextTokenPredicate;
    props: Partial<PretextTokenProps.Native>;
}