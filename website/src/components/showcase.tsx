import style from '@site/src/css/modules/showcase.module.scss';
import clsx from 'clsx';
import { ShowcaseProps, ShowcaseControlProps, ShowcasePanelProps, ShowcaseState } from '@site/src/types/showcase';
import { zuordX } from 'zuord';
import { createContext } from 'react';

const ShowcaseContext = createContext<ShowcaseState>({});

export const Showcase: React.FC<ShowcaseProps> = ($props) => {
    const props = zuordX.integrate.plain.loose({
        panel: {
            controls: [],
            design: { columns: 3 }
        }
    }, $props);

    return (
        <ShowcaseContext.Provider value={props}>
            <div className={clsx('showcase', style['showcase'])}>
                <ShowcasePanel {...props.panel} />
            </div>
        </ShowcaseContext.Provider>
    );
}

const ShowcasePanel : React.FC<ShowcasePanelProps> = (props) => {
    return (
        <div className={clsx(style['panel'])} style={{ gridTemplateColumns: `repeat(${props.design.columns}, 1fr)` }}>
            {props.controls.map((control, index) => (
                <ShowcaseControl key={index} {...control} />
            ))}
        </div>
    );
}

const ShowcaseControl: React.FC<ShowcaseControlProps> = (props) => {
    return (
        <div
            className={clsx(style['control'])}
        >
            <span className={style['layout']}>
                <span className={style['text']}>{props.text.default}</span>
            </span>
            <span className={style['visual']}>
                <span className={clsx(style['text'], style['default'])}>{props.text.default}</span>
                <span className={clsx(style['text'], style['focused'])}>{props.text.focused}</span>
            </span>
        </div>
    );
}