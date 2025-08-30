import { useState } from 'react';
import { Tooltip } from '@mui/material';
import clsx from 'clsx';
import style from '@site/src/css/modules/featureField.module.scss';
import { FeatureFieldProps } from '@site/src/types/featureField';
import { FeatureMonitor } from './featureMonitor';

export const FeatureField: React.FC<FeatureFieldProps> = ({ 
    text = {
        layout: '',
        passive: '',
        active: ''
    },
    monitor = { 
        node: <FeatureMonitor />,
        delay: {
            enter: 200,
            leave: 100,
            enterNext: 200
        },
        offset: [0, 0]
    },
    className,
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
            enterDelay={monitor.delay.enter}
            enterNextDelay={monitor.delay.enterNext}
            leaveDelay={monitor.delay.leave}
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
                                offset: monitor.offset
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
                    <span className={style['text']}>{text.layout}</span>
                </span>
                <span className={style['visual']}>
                    <span className={clsx(style['text'], style['passive'])}>{text.passive}</span>
                    <span className={clsx(style['text'], style['active'])}>{text.active}</span>
                </span>
            </div>
        </Tooltip>
    )
}

