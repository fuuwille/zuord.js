import style from '@site/src/css/modules/benefitSyncAPI.module.scss';
import { Pretext } from '@site/src/components/pretext';
import { ShowcaseControlBody } from '@site/src/types/showcase';

export const syncAPIControl = (text: string) => {
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
                    ? <Pretext code={`zuord.${text}(...)`} /> 
                    : <Pretext code={`Zuord.${text}<...>`} />,
            },
            body: {
                code: <Pretext code={`zuord.${text}(...)`} />,
                result: {
                    type: <Pretext code={`Zuord`} />,
                    runtime: <Pretext code={`zuord.${text}(...)`} />
                }
            }
        }
    };
}