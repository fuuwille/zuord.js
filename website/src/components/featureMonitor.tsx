import style from '@site/src/css/modules/featureMonitor.module.scss';
import clsx from "clsx";
import { FeatureMonitorProps } from '@site/src/types/featureMonitor';
import { Divider } from '@mui/material';

export const FeatureMonitor: React.FC<FeatureMonitorProps> = ({ 
    title = "Feature Monitor"
}) => {
    return (
        <div className={clsx('feature-monitor', style['feature-monitor'])}>
            <div className={clsx(style['title'])}>
                {title}
            </div>
            <Divider {...dividerProps('horizontal')} />
            <div className={clsx(style['content'])}>
                <div className={clsx(style['view'])}>
                    A
                </div>
                <Divider orientation="vertical" {...dividerProps('vertical')} />
                <div className={clsx(style['analyze'])}>
                    B
                </div>
            </div>
        </div>
    );
}

const dividerProps = (horizontal: 'horizontal' | 'vertical') => ({
    orientation: horizontal,
    flexItem: true
});