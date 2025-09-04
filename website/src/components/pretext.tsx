import style from '@site/src/css/modules/pretext.module.scss';
import clsx from "clsx";
import { PretextFeaturedTokenProps, PretextProps, PretextTokenProps } from '@site/src/types/pretext';
import { zuordX } from 'zuord';
import { highlighter } from '@site/src/utils/pretext';
import { Tooltip } from '@mui/material';

export const Pretext: React.FC<PretextProps> = ($props) => {
    const props = zuordX.integrate.plain.loose({
        text: '',
        modifiers: [],
        language: 'typescript',
        design: {
            selectable: false,
            style: {},
        }
    }, $props);

    const { tokens } = highlighter.codeToTokens(props.text, { lang: 'ts', theme: 'dark-plus' });

    return (
        <pre className={clsx('pretext', style['pretext'])} style={{ userSelect: props.design.selectable ? 'text' : 'none', ...props.design.style }}>
            {tokens.map((line, i) => (
                <div key={i} style={{ minHeight: '24px', lineHeight: '24px' }}>
                    {line.map((token, j) => {
                        
                        let meta = { Token: PretextToken, content: token.content, color: token.color };

                        for (const modifier of props.modifiers) {
                            if (modifier.predicate(meta.content)) {
                                meta = { ...meta, ...(modifier.props) };
                            }
                        }

                        const { Token, ...rest } = meta;

                        return (
                            <Token {...rest} />
                        );
                    })}
                </div>
            ))}
        </pre>
    );
};

export const PretextToken: React.FC<PretextTokenProps> = (props) => {
    return (
        <span style={{ color: props.color }}>
            {props.content}
        </span>
    );
}

export const PretextFeaturedToken: React.FC<PretextFeaturedTokenProps> = (props) => {
    return (
        <Tooltip title={props.title} placement="bottom">
            <div style={{ color: props.color, border: `1px solid ${props.color}69`, borderRadius: '800px', height: '20px', padding: '0px 8px', display: 'inline-flex', alignItems: 'center', cursor: 'pointer' }}>
                {props.content}
            </div>
        </Tooltip>
    );
}