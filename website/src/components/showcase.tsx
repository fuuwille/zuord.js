import style from '@site/src/css/modules/showcase.module.scss';
import clsx from 'clsx';
import { ShowcaseProps, ShowcaseControlProps } from "@site/src/types/showcase"
import { zuord } from "zuord"

export const Showcase: React.FC<ShowcaseProps> = ($props) => {
    const props = zuord.integrate({
        controls: [],
        style: {
            columns: 3
        }
    }, $props);

    return (
        null
    )
}

export const ShowcaseControl: React.FC<ShowcaseControlProps> = ($props) => {
    const props = zuord.integrate({
        text: {
            default: "showcase",
            focused: "showcase X"
        }
    }, $props);

    return (
        <div 
            className={clsx(style['feature-field'])}
        >
            <span className={style['layout']}>
                <span className={style['text']}>{props.text.default}</span>
            </span>
            <span className={style['visual']}>
                <span className={clsx(style['text'], style['default'])}>{props.text.default}</span>
                <span className={clsx(style['text'], style['focused'])}>{props.text.focused}</span>
            </span>
        </div>
    )
}