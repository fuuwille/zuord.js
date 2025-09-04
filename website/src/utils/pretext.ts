import ts from '@shikijs/langs/typescript';
import darkPlus from '@shikijs/themes/dark-plus';
import { createHighlighterCoreSync, createJavaScriptRegexEngine } from 'shiki';

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
    }
}