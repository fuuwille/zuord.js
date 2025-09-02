import style from '@site/src/css/modules/benefitSyncAPI.module.scss';
import clsx from 'clsx';
import { CodeBlock } from './codeBlock';
import { CodeTokenModifier } from '@site/src/types/codeToken';
import { Showcase } from './showcase';

export const showcaseControl = (text: string) => {
  const runtime = text[0] === text[0].toLowerCase();

  return {
    text: {
      default: `.${text}`,
      focused: runtime ? `${text}()` : `${text}<>`,
    },
    design: {
      className: runtime ? style['runtime'] : style['type'],
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
        <Showcase panel={{
          controls: [
            showcaseControl('integrate'), showcaseControl('merge'), showcaseControl('evolve'), showcaseControl('pick'), showcaseControl('omit'),
            showcaseControl('Integrate'), showcaseControl('Merge'), showcaseControl('Evolve'), showcaseControl('Pick'), showcaseControl('Omit'),
          ],
          design: { columns: 5 }
        }}/>
      </div>
  </div>
);

export const runtimeImportModifiers: CodeTokenModifier[] = [
  {
    predicate: (data) => data.text.trim() === "zuord",
    props: { Wrapper: ({ text }) => <span className={style['runtime-import-zuord']}>{text}</span> }
  }
]

