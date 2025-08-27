import Prism from "prismjs";
import "prismjs/components/prism-typescript"; // TS desteği için
import "prism-themes/themes/prism-vsc-dark-plus.css";
import { prismContent } from "@site/src/utils/prismContent";

export const CodeBlock: React.FC<CodeBlockProps> = ({ code }) => {
  const tokens = Prism.tokenize(code, Prism.languages.ts);

  return (
    <pre
      className="code-block"
      style={{
        background: "transparent",
        fontSize: "14px",
        padding: 2,
        margin: 2,
        userSelect: "none",
      }}
    >
      {tokens.map((token, i) => {
        if (typeof token === "string") {
          return <span key={i}>{token}</span>;
        }

        const { type, content } = token;

        return (
          <span
            key={i}
            className={`token ${type}`}
            data-token-index={i}
            data-token-type={type}
          >
            {prismContent(content)}
          </span>
        );
      })}
    </pre>
  );
};


export interface CodeBlockProps {
    code: string;
    style?: Partial<React.CSSProperties>;
}
