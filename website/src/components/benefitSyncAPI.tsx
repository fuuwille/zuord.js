import style from '@site/src/css/modules/benefitSyncAPI.module.scss';
import clsx from 'clsx';
import { CodeBlock } from './codeBlock';
import { CodeTokenModifier } from '@site/src/data/code';

const BenefitSyncAPI: React.FC = () => (  
  <div className={clsx('benefit-sync-api', style['benefit-sync-api'])}>
    <div className={style['imports']}>
      <CodeBlock code={`import { zuord } from 'zuord';`} modifiers={runtimeImportModifiers} />
      <CodeBlock code={`import { Zuord } from 'zuord';`} />
    </div>
      <div className={style['navbar']}>
        <div className={clsx(style['button'], style['button-js'])}>integrate</div>
        <div className={clsx(style['button'], style['button-js'])}>merge</div>
        <div className={clsx(style['button'], style['button-js'])}>evolve</div>
        <div className={clsx(style['button'], style['button-js'])}>pick</div>
        <div className={clsx(style['button'], style['button-js'])}>omit</div>
        <div className={clsx(style['button'], style['button-d.ts'])}>Integrate</div>
        <div className={clsx(style['button'], style['button-d.ts'])}>Merge</div>
        <div className={clsx(style['button'], style['button-d.ts'])}>Evolve</div>
        <div className={clsx(style['button'], style['button-d.ts'])}>Pick</div>
        <div className={clsx(style['button'], style['button-d.ts'])}>Omit</div>
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