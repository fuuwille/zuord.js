import clsx from "clsx";
import { tokenText } from "../utils/tokenText";

export const CodeToken: React.FC<CodeTokenProps> = ({ text, type }) => {
    return (
        <span className={clsx(`token ${type}`)}>
            {text}
        </span>
    );
};

export interface CodeTokenProps {
    text: string;
    type: string;
    wrapper?: CodeTokenWrapper;
}

export type CodeTokenWrapper = React.FC<CodeTokenWrapperProps>;

export interface CodeTokenWrapperProps {
    text: string
}