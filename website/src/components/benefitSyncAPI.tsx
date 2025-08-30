import style from '@site/src/css/modules/benefitSyncAPI.module.scss';
import clsx from 'clsx';
import { CodeBlock } from './codeBlock';
import { CodeTokenModifier } from '@site/src/data/code';

export const BenefitSyncAPI: React.FC = () => (  
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
        <div className={clsx(style['button'], style['button-dts'])}>Integrate</div>
        <div className={clsx(style['button'], style['button-dts'])}>Merge</div>
        <div className={clsx(style['button'], style['button-dts'])}>Evolve</div>
        <div className={clsx(style['button'], style['button-dts'])}>Pick</div>
        <div className={clsx(style['button'], style['button-dts'])}>Omit</div>
      </div>
  </div>
);

export const runtimeImportModifiers: CodeTokenModifier[] = [
  {
    predicate: (data) => data.text.trim() === "zuord",
    props: { Wrapper: ({ text }) => <span className={style['runtime-import-zuord']}>{text}</span> }
  }
]

const Button: React.FC<{ text: string }> = ({ text }) => {
  let type = 'js';

  if(text[0] === text[0].toUpperCase()) {
    type = 'dts';
  }

  return (
    <div className={clsx(style['button'], style[`button-${type}`])}>
      {text}
    </div>
  )
}