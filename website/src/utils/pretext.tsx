import ts from '@shikijs/langs/typescript';
import darkPlus from '@shikijs/themes/dark-plus';
import { createHighlighterCoreSync, createJavaScriptRegexEngine } from 'shiki';
import { PretextFeaturedToken } from '../components/pretext';

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
                Token: PretextFeaturedToken,
                title: title,
            }
        };
    }
}