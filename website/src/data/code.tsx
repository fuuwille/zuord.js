export interface CodeTokenData {
    text: string;
    type: string;
}

export type CodeTokenWrapper = React.FC<CodeTokenData>;