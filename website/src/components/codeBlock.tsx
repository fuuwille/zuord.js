import Prism from "prismjs";
import "prismjs/components/prism-typescript"; // TS desteği için
import "prism-themes/themes/prism-vsc-dark-plus.css";

export const CodeBlock: React.FC<CodeBlockProps> = ({ code }) => {
  const tokens = Prism.tokenize(code, Prism.languages.ts);

  const renderContent = (content: string | Prism.Token | (string | Prism.Token)[]) => {
    if (typeof content === "string") return content;
    if (Array.isArray(content)) {
      return content.map((c, i) => <>{renderContent(c)}</>);
    }
    return renderContent(content.content);
  };

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
            {renderContent(content)}
          </span>
        );
      })}
    </pre>
  );
};


export interface CodeBlockProps {
  code: string;
}
