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
                    ? <Pretext text={`zuord.${text}(...)`} /> 
                    : <Pretext text={`Zuord.${text}<...>`} />,
            },
            body: {
                code: <Pretext text={`zuord.${text}(...)`} />,
                result: {
                    type: <Pretext text={`Zuord`} />,
                    runtime: <Pretext text={`zuord.${text}(...)`} />
                }
            }
        }
    };
}