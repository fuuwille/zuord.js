import ts from '@shikijs/langs/typescript';
import darkPlus from '@shikijs/themes/dark-plus';
import { createHighlighterCoreSync, createJavaScriptRegexEngine } from 'shiki';

export const highlighter = createHighlighterCoreSync({
    themes: [darkPlus],
    langs: [ts],
    engine: createJavaScriptRegexEngine()
})