import { useState } from 'react';
import { Tooltip } from '@mui/material';
import clsx from 'clsx';
import style from '@site/src/css/modules/featureField.module.scss';
import { FeatureFieldProps } from '@site/src/types/featureField';
import { FeatureMonitor } from './featureMonitor';

export const FeatureField: React.FC<FeatureFieldProps> = ({ 
    layoutText, 
    passiveText, 
    activeText, 
    monitor = { node: <FeatureMonitor /> },
    className,
    enterDelay = 200,
    leaveDelay = 100,
    enterNextDelay = 200,
    enableFocus = true
}) => {
    const [hovered, setHovered] = useState(false);
    const [tooltipOpen, setTooltipOpen] = useState(false);
    const focused = enableFocus && (hovered || tooltipOpen);

    return (
        <Tooltip 
            title={monitor.node} 
            open={tooltipOpen}
            onOpen={() => setTooltipOpen(true)} 
            onClose={() => setTooltipOpen(false)}
            enterDelay={enterDelay}
            enterNextDelay={enterNextDelay}
            leaveDelay={leaveDelay}
            slotProps={{
                tooltip: {
                    sx: {
                        backgroundColor: 'transparent',
                        boxShadow: 'none',
                        padding: 0,
                        color: 'inherit',
                    }
                },
                popper: {
                    modifiers: [
                        {
                            name: 'offset',
                            options: {
                                offset: [0, 10]
                            }
                        }
                    ],
                }
            }}
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

