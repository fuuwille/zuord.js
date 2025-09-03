import style from '@site/src/css/modules/pretext.module.scss';
import clsx from "clsx";
import { PretextProps } from '@site/src/types/pretext';
import { zuordX } from 'zuord';
import { createHighlighterCoreSync, createJavaScriptRegexEngine } from 'shiki';
import ts from '@shikijs/langs/typescript'
import darkPlus from '@shikijs/themes/dark-plus'

const shiki = createHighlighterCoreSync({
  themes: [darkPlus],
  langs: [ts],
  engine: createJavaScriptRegexEngine()
})

export const Pretext: React.FC<PretextProps> = ($props) => {
    const props = zuordX.integrate.plain.loose({
        text: '',
        modifiers: [],
        language: 'typescript',
        design: {
            selectable: true,
            style: {},
        }
    }, $props);


    const { tokens } = shiki.codeToTokens(props.text, { lang: 'ts', theme: 'dark-plus' });


    return (
        <pre className={clsx('pretext', style['pretext'])} style={{ userSelect: props.design.selectable ? 'text' : 'none', ...props.design.style }}>
            {tokens.map((line, i) => (
                <div key={i}>
                    {line.map((token, j) => (
                        <span
                            key={j}
                            style={{ color: token.color }}
                            className={`token ${token.explanation?.[0]?.scopes.at(-1)?.scopeName ?? ''}`}
                        >
                            {token.content}
                        </span>
                    ))}
                </div>
            ))}
        </pre>
    );
};