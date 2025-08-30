import style from '@site/src/css/modules/featureMonitor.module.scss';
import clsx from "clsx";
import { FeatureMonitorProps } from '@site/src/types/featureMonitor';

export const FeatureMonitor: React.FC<FeatureMonitorProps> = ({ 
    title = "Feature Monitor"
}) => {
    return (
        <div className={clsx('feature-monitor', style['feature-monitor'])}>
            <div className={clsx(style['title'])}>
                {title}
            </div>
            <div className={clsx(style['content'])}>
                <div className={clsx(style['view'])}>

                </div>

                <div className={clsx(style['analyze'])}>

                </div>
            </div>
        </div>
    );
}

