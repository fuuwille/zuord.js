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
    Wrapper?: React.FC<{ text: string}>;
}