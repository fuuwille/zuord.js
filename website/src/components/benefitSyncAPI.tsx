import style from '@site/src/css/modules/benefitSyncAPI.module.scss';
import clsx from 'clsx';

const BenefitSyncAPI: React.FC = ({
}) => (
    <div className={clsx('benefit-sync-api', style['benefit-sync-api'])}>
        Benefit Sync API
    </div>
);

export default BenefitSyncAPI;