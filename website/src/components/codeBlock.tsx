import Prism from "prismjs";
import "prism-themes/themes/prism-vsc-dark-plus.css";

export const CodeLabel: React.FC<CodeBlockProps> = ({ code }) => {
  const tokens = Prism.tokenize(code, Prism.languages.ts);
  console.log(tokens);

  return (
    <pre className="code-block" style={{ background: "transparent", fontSize: "14px", padding: 2, margin: 2, userSelect: "none" }}>
      {tokens.map((token, i) => {
        const content = typeof token === "string" ? token : token.content;
        const type = typeof token === "string" ? null : token.type;

        return (
          <span
            key={i}
            className={`token ${type || ""}`}
            data-token-index={i}
            data-token-type={type}
          >
            {content}
          </span>
        );
      })}
    </pre>
  );
};

export interface CodeBlockProps {
    code: string;
}