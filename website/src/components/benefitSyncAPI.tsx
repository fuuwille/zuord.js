import style from '@site/src/css/modules/benefitSyncAPI.module.scss';
import clsx from 'clsx';
import { CodeBlock } from './codeBlock';

const BenefitSyncAPI: React.FC = ({
}) => { 
  
  return(
    <div className={clsx('benefit-sync-api', style['benefit-sync-api'])}>
        <div className={style['runtime']}>
          <CodeBlock code={`import { zuord } from 'zuord'`} />

          <div className={style['navbar']}>

          </div>
        </div>
        <div className={style['type']}>
            <div className={style['import']}>{"import { Zuord } from 'zuord';"}</div>
            <div className={style['navbar']}>

            </div>
        </div>
    </div>
)};

export default BenefitSyncAPI;