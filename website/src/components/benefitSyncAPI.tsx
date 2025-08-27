import style from '@site/src/css/modules/benefitSyncAPI.module.scss';
import clsx from 'clsx';
import { CodeBlock } from './codeBlock';
import { CodeTokenModifier } from '@site/src/data/code';

const BenefitSyncAPI: React.FC = () => (  
  <div className={clsx('benefit-sync-api', style['benefit-sync-api'])}>
    <div className={style['runtime']}>
      <CodeBlock code={`import { zuord } from 'zuord';`} modifiers={runtimeImportModifiers} />
      <div className={style['navbar']}>

      </div>
    </div>
    <div className={style['type']}>
      <CodeBlock code={`import { Zuord } from 'zuord';`} />
      <div className={style['navbar']}>

      </div>
    </div>
  </div>
);

export default BenefitSyncAPI;

export const runtimeImportModifiers: CodeTokenModifier[] = [
  {
    predicate: (data) => data.text.trim() === "zuord",
    props: { Wrapper: ({ text }) => <span style={{ backgroundColor: 'yellow' }}>{text}</span> }
  }
]