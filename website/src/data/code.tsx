export interface CodeTokenData {
    text: string;
    type: string;
}

export type CodeTokenWrapper = React.FC<CodeTokenData>;

export interface CodeTokenProps extends CodeTokenData {
    Wrapper?: CodeTokenWrapper
}

export type CodeTokenPredicate = (token: CodeTokenData) => boolean;

export type CodeTokenModifier = {
    predicate: CodeTokenPredicate;
    props: CodeTokenProps;
}