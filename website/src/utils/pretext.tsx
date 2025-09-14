import ts from '@shikijs/langs/typescript';
import darkPlus from '@shikijs/themes/dark-plus';
import { createHighlighterCoreSync, createJavaScriptRegexEngine, ThemedToken } from 'shiki';
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
    allType: () => {
        return [
            {
                predicate: () => true,
                props: {
                    style: { color: '#4ec9b0' }
                }
            },
            {
                predicate: (content: string) => ["<", ">", ".", ","].includes(content.trim()),
                props: {
                    style: { color: '#d4d4d4' }
                }
            }
        ];
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
    diff: (contents : string[], level: "origin" | "modified" | "added") => {
        return {
            predicate: ($content: string) => contents.includes($content),
            props: {
                Body: PretextTokenBody.Diff,
                level
            }
        };
    }
}

interface TokenRange {
  startLine: number;
  startToken: number;
  endLine: number;
  endToken: number;
}

export function getTokenRange(tokens2d: ThemedToken[][], substring: string): TokenRange | null {
    const linesText = tokens2d.map(lineTokens => lineTokens.map(t => t.content).join(''));
    const fullText = linesText.join('\n');

    const startIndex = fullText.indexOf(substring);
    if (startIndex === -1) return null;

    let currentIndex = 0;
    let foundStart = false;
    let foundEnd = false;

    const range: Partial<TokenRange> = {};

    for (let line = 0; line < tokens2d.length; line++) {
        for (let tokenIdx = 0; tokenIdx < tokens2d[line].length; tokenIdx++) {
            const token = tokens2d[line][tokenIdx];
            const tokenLength = token.content.length;

            if (!foundStart && currentIndex <= startIndex && startIndex < currentIndex + tokenLength) {
                range.startLine = line;
                range.startToken = tokenIdx;
                foundStart = true;
            }

            if (foundStart && currentIndex < startIndex + substring.length && startIndex + substring.length <= currentIndex + tokenLength) {
                range.endLine = line;
                range.endToken = tokenIdx;
                foundEnd = true;
                break;
            }

            currentIndex += tokenLength;
        }
        if (foundEnd) break;

        currentIndex += 1;
    }

    if (foundStart && foundEnd) {
        return range as TokenRange;
    }

    return null;
}

export function extractTokens(tokens2d: ThemedToken[][], substring: string): ThemedToken[][] {
    const extracted: ThemedToken[][] = [];
    const range = getTokenRange(tokens2d, substring);

    for (let line = range.startLine; line <= range.endLine; line++) {
        const startIdx = line === range.startLine ? range.startToken : 0;
        const endIdx = line === range.endLine ? range.endToken : tokens2d[line].length - 1;

        extracted.push(tokens2d[line].slice(startIdx, endIdx + 1));
    }

    return extracted;
}