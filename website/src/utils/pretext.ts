import ts from '@shikijs/langs/typescript';
import darkPlus from '@shikijs/themes/dark-plus';
import lightPlus from '@shikijs/themes/light-plus';
import { createHighlighterCoreSync, createJavaScriptRegexEngine } from 'shiki';

export const highlighter = createHighlighterCoreSync({
    themes: [darkPlus, lightPlus],
    langs: [ts],
    engine: createJavaScriptRegexEngine()
})