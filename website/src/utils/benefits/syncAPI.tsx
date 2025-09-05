import style from '@site/src/css/modules/benefits.module.scss';
import { SyncAPIControlData } from '@site/src/types/benefits/syncAPI';

export const syncAPIControl = (data: SyncAPIControlData) => {
    const runtime = data.text[0] === data.text[0].toLowerCase();

    const textFirst = `.${data.text}`;
    const textSecond = runtime ? `${data.text}()` : `${data.text}<>`;

    return {
        text: {
            zero: textSecond,
            first: textFirst,
            second: textSecond
        },
        design: {
            className: runtime ? style['runtime'] : style['type'],
        },
        inspector: data.inspector
    };
}