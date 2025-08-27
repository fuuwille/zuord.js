import style from '@site/src/css/modules/benefitSyncAPI.module.scss';
import clsx from 'clsx';
import { CodeBlock } from './codeBlock';
import { CodeTokenModifier } from '@site/src/data/code';

const BenefitSyncAPI: React.FC = () => (  
  <div className={clsx('benefit-sync-api', style['benefit-sync-api'])}>
    <div className={style['runtime']}>
      <CodeBlock code={`import { zuord } from 'zuord';`} modifiers={runtimeImportModifiers} />
      <div className={style['navbar']}>
        <div className={style['button']}>integrate</div>
        <div className={style['button']}>merge</div>
        <div className={style['button']}>evolve</div>
        <div className={style['button']}>pick</div>
        <div className={style['button']}>omit</div>
      </div>
    </div>

    <div className={style['type']}>
      <CodeBlock code={`import { Zuord } from 'zuord';`} />
      <div className={style['navbar']}>
        <div className={style['button']}>Integrate</div>
        <div className={style['button']}>Merge</div>
        <div className={style['button']}>Evolve</div>
        <div className={style['button']}>Pick</div>
        <div className={style['button']}>Omit</div>
      </div>
    </div>
  </div>
);

export default BenefitSyncAPI;

export const runtimeImportModifiers: CodeTokenModifier[] = [
  {
    predicate: (data) => data.text.trim() === "zuord",
    props: { Wrapper: ({ text }) => <span className={style['runtime-import-zuord']}>{text}</span> }
  }
]