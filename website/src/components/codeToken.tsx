import clsx from "clsx";
import { CodeTokenData } from "@site/src/data/code";

export const CodeToken: React.FC<CodeTokenProps> = ({ text, type, Wrapper }) => {
    return (
        <span className={clsx(`token ${type}`)}>
            {Wrapper ? <Wrapper text={text}/> : text}
        </span>
    );
};

export interface CodeTokenProps extends CodeTokenData {
    Wrapper?: React.FC<{ text: string}>;
}