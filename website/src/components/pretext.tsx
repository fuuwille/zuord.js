import style from '@site/src/css/modules/pretext.module.scss';
import clsx from "clsx";
import { PretextProps } from '@site/src/types/pretext';
import { zuordX } from 'zuord';
import { highlighter } from '@site/src/utils/pretext';
import { useColorMode } from '@docusaurus/theme-common';

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

    const { colorMode } = useColorMode();
    const { tokens } = highlighter.codeToTokens(props.text, { lang: 'ts', theme: colorMode === 'dark' ? 'dark-plus' : 'light-plus' });


    return (
        <pre className={clsx('pretext', style['pretext'])} style={{ userSelect: props.design.selectable ? 'text' : 'none', ...props.design.style }}>
            {tokens.map((line, i) => (
                <div key={i}>
                    {line.map((token, j) => {
                        
                        const modifier = props.modifiers.find(mod => mod.predicate(token.content));
                        const { content, color, Node } = { ...token, ...(modifier?.props) };

                        return (
                            <span
                                key={j}
                                style={{ color: color }}
                            >
                                {Node ? <Node content={content} color={color} /> : content}
                            </span>
                        );
                    })}
                </div>
            ))}
        </pre>
    );
};