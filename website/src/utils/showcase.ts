import style from '@site/src/css/modules/benefitSyncAPI.module.scss';

export const syncAPIControl = (text: string) => {
    const runtime = text[0] === text[0].toLowerCase();

    return {
        text: {
            default: `.${text}`,
            focused: runtime ? `${text}()` : `${text}<>`,
        },
        design: {
            className: runtime ? style['runtime'] : style['type'],
        }
    };
}