import { useState } from 'react';
import { Tooltip } from '@mui/material';
import clsx from 'clsx';
import style from '@site/src/css/modules/featureField.module.scss';

export const FeatureField: React.FC<FeatureFieldProps> = ({ layoutText, passiveText, activeText, className }) => {
    const [hovered, setHovered] = useState(false);
    const [tooltip, setTooltip] = useState(false);
    const focused = hovered || tooltip;

    return (
        <Tooltip 
            title={layoutText} 
            onOpen={() => setTooltip(true)} 
            onClose={() => setTooltip(false)}
            enterDelay={200}
            enterNextDelay={200}
            leaveDelay={100}
        >
            <div 
                className={clsx(style['feature-field'], focused ? style['focused'] : null, className)}  
                onMouseEnter={() => setHovered(true)} 
                onMouseLeave={() => setHovered(false)}
            >
                <span className={style['layout']}>
                    <span className={style['text']}>{layoutText}</span>
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
    layoutText: string;
    passiveText: string;
    activeText: string;
    className?: string;
}