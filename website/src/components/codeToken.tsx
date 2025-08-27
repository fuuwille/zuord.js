import clsx from "clsx";

export const CodeToken: React.FC<CodeTokenProps> = ({ token }) => {

    return (
        <span className={clsx('token')}>
            
        </span>
    );
};

export interface CodeTokenProps {
    token: string | Prism.Token;
}