export interface CodeTokenData {
    text: string;
    type: string;
}

export type CodeTokenWrapper = React.FC<CodeTokenData>;

export type CodeTokenPredicate = (token: CodeTokenData) => boolean;

export type CodeTokenModifier = {
    predicate: CodeTokenPredicate;
    data: CodeTokenData;
}