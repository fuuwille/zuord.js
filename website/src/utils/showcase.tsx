import style from '@site/src/css/modules/benefitSyncAPI.module.scss';
import { CodeBlock } from '@site/src/components/codeBlock';
import { ShowcaseControlBody } from '@site/src/types/showcase';

export const syncAPIControl = (text: string, body: ShowcaseControlBody) => {
    const runtime = text[0] === text[0].toLowerCase();

    return {
        text: {
            default: `.${text}`,
            focused: runtime ? `${text}()` : `${text}<>`,
        },
        design: {
            className: runtime ? style['runtime'] : style['type'],
        },
        inspector: {
            head: {
                title: runtime 
                    ? <CodeBlock code={`zuord.${text}(...)`} /> 
                    : <CodeBlock code={`Zuord.${text}<...>`} />,
            },
            body: body
        }
    };
}