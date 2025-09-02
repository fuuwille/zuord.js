import style from '@site/src/css/modules/showcase.module.scss';

export const showcaseControl = (text: string) => {
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