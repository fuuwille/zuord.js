import style from '@site/src/css/modules/featureMonitor.module.scss';
import clsx from "clsx";

export const FeatureMonitor: React.FC = ({ 
}) => {
    return (
        <div className={clsx('feature-monitor', style['feature-monitor'])}>
            <h2>Feature Monitor</h2>
            <p>Monitor your features in real-time.</p>
        </div>
    );
}

