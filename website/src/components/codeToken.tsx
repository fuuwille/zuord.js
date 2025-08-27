import clsx from "clsx";
import { CodeTokenData, CodeTokenWrapper } from "@site/src/data/code";

export const CodeToken: React.FC<CodeTokenProps> = ({ text, type, Wrapper }) => {
    return (
        <span className={clsx(`token ${type}`)}>
            {Wrapper ? <Wrapper text={text} type={type} /> : text}
        </span>
    );
};

export interface CodeTokenProps extends CodeTokenData {
    Wrapper?: CodeTokenWrapper
}