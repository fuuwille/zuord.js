import style from '@site/src/css/modules/featureMonitor.module.scss';
import clsx from "clsx";

export const FeatureMonitor: React.FC = ({ 
}) => {
    return (
        <div className={clsx('feature-monitor', style['feature-monitor'])}>
            <div className={clsx(style['title'])}>

            </div>
        </div>
    );
}

