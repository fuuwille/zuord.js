import clsx from "clsx";

export const CodeToken: React.FC<CodeTokenProps> = ({ text, type, Wrapper }) => {
    return (
        <span className={clsx(`token ${type}`)}>
            {Wrapper ? <Wrapper text={text}/> : text}
        </span>
    );
};

export interface CodeTokenProps {
    text: string;
    type: string;
    Wrapper?: CodeTokenWrapper;
}

export type CodeTokenWrapper = React.FC<CodeTokenWrapperProps>;

export interface CodeTokenWrapperProps {
    text: string
}