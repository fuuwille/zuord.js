import { useState } from 'react';
import { Tooltip } from '@mui/material';
import clsx from 'clsx';
import style from '@site/src/css/modules/featureField.module.scss';

export const FeatureField: React.FC<FeatureFieldProps> = ({ text, className }) => {
    const [hovered, setHovered] = useState(false);
    const [tooltip, setTooltip] = useState(false);
    const focused = hovered || tooltip;

    let type, passiveText = `.${text}`, activeText;

    if(text[0] === text[0].toLowerCase()) {
        type = 'runtime';
        activeText = `${text}()`;
    }
    else {
        type = 'type';
        activeText = `${text}<>`;
    }

    return (
        <Tooltip 
            title={passiveText} 
            onOpen={() => setTooltip(true)} 
            onClose={() => setTooltip(false)}
            enterDelay={200}
            enterNextDelay={200}
            leaveDelay={100}
        >
        <div 
            className={clsx(style['box'], style[type], focused ? style['focused'] : null)}  
            onMouseEnter={() => setHovered(true)} 
            onMouseLeave={() => setHovered(false)}
        >
            <span className={style['layout']}>
                <span className={style['text']}>{passiveText}</span>
            </span>
            <span className={style['visual']}>
            <span className={clsx(style['text'], style['passive'])}>{passiveText}</span>
            <span className={clsx(style['text'], style['active'])}>{activeText}</span>
            </span>
        </div>
        </Tooltip>
    )
}

export interface FeatureFieldProps {
    text: string;
    className?: string;
}