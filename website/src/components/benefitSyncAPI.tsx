import style from '@site/src/css/modules/benefitSyncAPI.module.scss';
import clsx from 'clsx';
import { CodeBlock } from './codeBlock';
import { CodeTokenModifier } from '@site/src/types/codeToken';
import { FeatureField } from './featureField';
import { FeatureMonitor } from './featureMonitor';

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
              node: <FeatureMonitor />,
              delay: {
                  enter: 200,
                  leave: 100,
                  enterNext: 200
              },
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
        <FeatureField {...featureFieldProps("integrate")} /> <FeatureField {...featureFieldProps("merge")} /> <FeatureField {...featureFieldProps("evolve")} /> <FeatureField {...featureFieldProps("pick")} /> <FeatureField {...featureFieldProps("omit")} />
        <FeatureField {...featureFieldProps("Integrate")} /> <FeatureField {...featureFieldProps("Merge")} /> <FeatureField {...featureFieldProps("Evolve")} /> <FeatureField {...featureFieldProps("Pick")} /> <FeatureField {...featureFieldProps("Omit")} />
      </div>
  </div>
);

export const runtimeImportModifiers: CodeTokenModifier[] = [
  {
    predicate: (data) => data.text.trim() === "zuord",
    props: { Wrapper: ({ text }) => <span className={style['runtime-import-zuord']}>{text}</span> }
  }
]

