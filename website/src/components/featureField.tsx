import { useState } from 'react';
import { Tooltip } from '@mui/material';
import clsx from 'clsx';
import style from '@site/src/css/modules/featureField.module.scss';
import { FeatureFieldProps } from '@site/src/types/featureField';

export const FeatureField: React.FC<FeatureFieldProps> = ({ 
    layoutText, 
    passiveText, 
    activeText, 
    className,
    enterDelay = 200,
    leaveDelay = 100,
    enterNextDelay = 200
}) => {
    const [hovered, setHovered] = useState(false);
    const [tooltip, setTooltip] = useState(false);
    const focused = hovered || tooltip;

    return (
        <Tooltip 
            title={layoutText} 
            onOpen={() => setTooltip(true)} 
            onClose={() => setTooltip(false)}
            enterDelay={enterDelay}
            enterNextDelay={enterNextDelay}
            leaveDelay={leaveDelay}
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

