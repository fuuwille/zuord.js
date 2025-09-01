import style from '@site/src/css/modules/benefitSyncAPI.module.scss';
import clsx from 'clsx';
import { CodeBlock } from './codeBlock';
import { CodeTokenModifier } from '@site/src/types/codeToken';
import { Showcase } from './showcase';

export const featureFieldProps = (text: string) => {
  const runtime = text[0] === text[0].toLowerCase();

  return {
    text: {
      layout: `.${text}`,
      passive: `.${text}`,
      active: runtime ? `${text}()` : `${text}<>`,
    },
    className: runtime ? style['runtime'] : style['type'],
    monitor: {

              offset: [0, runtime ? 30 : 0] as [number, number]
    }
  };
}

export const BenefitSyncAPI: React.FC = () => (  
  <div className={clsx('benefit-sync-api', style['benefit-sync-api'])}>
    <div className={style['imports']}>
      <CodeBlock code={`import { zuord } from 'zuord';`} modifiers={runtimeImportModifiers} />
      <CodeBlock code={`import { Zuord } from 'zuord';`} />
    </div>
      <div className={style['navbar']}>
        <Showcase controls={[
          { text: { default: ".integrate", focused: "integrate()" } },
          { text: { default: ".merge", focused: "merge()" } },
          { text: { default: ".evolve", focused: "evolve()" } },
          { text: { default: ".pick", focused: "pick()" } },
          { text: { default: ".omit", focused: "omit()" } },
          { text: { default: ".Integrate", focused: "Integrate<>" } },
          { text: { default: ".Merge", focused: "Merge<>" } },
          { text: { default: ".Evolve", focused: "Evolve<>" } },
          { text: { default: ".Pick", focused: "Pick<>" } },
          { text: { default: ".Omit", focused: "Omit<>" } }
        ]} style={{ columns: 5 }}/>
      </div>
  </div>
);

export const runtimeImportModifiers: CodeTokenModifier[] = [
  {
    predicate: (data) => data.text.trim() === "zuord",
    props: { Wrapper: ({ text }) => <span className={style['runtime-import-zuord']}>{text}</span> }
  }
]

