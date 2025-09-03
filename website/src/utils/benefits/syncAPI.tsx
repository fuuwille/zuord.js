import style from '@site/src/css/modules/benefits/syncAPI.module.scss';
import { Pretext } from '@site/src/components/pretext';
import { SyncAPIControlData } from '@site/src/types/benefits/syncAPI';

export const syncAPIControl = (data: SyncAPIControlData) => {
    const runtime = data.text[0] === data.text[0].toLowerCase();

    return {
        text: {
            default: `.${data.text}`,
            focused: runtime ? `${data.text}()` : `${data.text}<>`,
        },
        design: {
            className: runtime ? style['runtime'] : style['type'],
        },
        inspector: {
            head: {
                title: runtime 
                    ? <Pretext text={`zuord.${data.text}(...)`} /> 
                    : <Pretext text={`Zuord.${data.text}<...>`} />,
            },
            body: {
                code: <Pretext text={`zuord.${data.text}(...)`} />,
                result: {
                    type: <Pretext text={`Zuord`} />,
                    runtime: <Pretext text={`zuord.${data.text}(...)`} />
                }
            }
        }
    };
}