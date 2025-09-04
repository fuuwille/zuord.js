import ts from '@shikijs/langs/typescript';
import darkPlus from '@shikijs/themes/dark-plus';
import { createHighlighterCoreSync, createJavaScriptRegexEngine } from 'shiki';
import { Tooltip } from '@mui/material';

export const highlighter = createHighlighterCoreSync({
    themes: [darkPlus],
    langs: [ts],
    engine: createJavaScriptRegexEngine()
})

export const tokenModifier = {
    const: (...contents : string[]) => {
        return {
            predicate: (content: string) => contents.includes(content),
            props: {
                color: '#4ebffd'
            }
        };
    },
    type: (...contents : string[]) => {
        return {
            predicate: (content: string) => contents.includes(content),
            props: {
                color: '#4ec9b0'
            }
        };
    },
    info: (content : string, title: React.ReactNode) => {
        return {
            predicate: ($content: string) => $content === content,
            props: {
                Node: ({ content, color }) => (
                    <Tooltip title={title} placement="bottom">
                        <div style={{ border: `1px solid ${color}69`, borderRadius: '800px', height: '20px', padding: '0px 8px', display: 'inline-flex', alignItems: 'center'}}>
                            {content}
                        </div>
                    </Tooltip>
                )
            }
        };
    }
}