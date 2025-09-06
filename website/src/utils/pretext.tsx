import ts from '@shikijs/langs/typescript';
import darkPlus from '@shikijs/themes/dark-plus';
import { createHighlighterCoreSync, createJavaScriptRegexEngine } from 'shiki';
import { PretextTokenBody } from '../components/pretext';

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
                style: { color: '#4ebffd' }
            }
        };
    },
    type: (...contents : string[]) => {
        return {
            predicate: (content: string) => contents.includes(content),
            props: {
                style: { color: '#4ec9b0' }
            }
        };
    },
    func: (...contents : string[]) => {
        return {
            predicate: (content: string) => contents.includes(content),
            props: {
                style: { color: '#dcdcaa' }
            }
        };
    },
    featured: (content : string, tips: React.FC) => {
        return {
            predicate: ($content: string) => $content === content,
            props: {
                tips,
                style: { /*color: props.color, */border: '1px solid'/*`1px solid ${props.color}69`*/, borderRadius: '800px', height: '20px', padding: '0px 8px', display: 'inline-flex', alignItems: 'center', cursor: 'pointer' }
            }
        };
    },
    animated: (content : string, stages: React.ReactNode[]) => {
        return {
            predicate: ($content: string) => $content === content,
            props: {
                Body: PretextTokenBody.Animated,
                layout: content,
                stages: stages
            }
        };
    },
    diff: (contents : string[], level: "origin" | "modified" | "") => {
        return {
            predicate: ($content: string) => contents.includes($content),
            props: {
                Body: PretextTokenBody.Diff,
                level
            }
        };
    }
}