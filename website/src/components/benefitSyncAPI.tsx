import style from '@site/src/css/modules/benefitSyncAPI.module.scss';
import clsx from 'clsx';
import { CodeBlock } from './codeBlock';
import { CodeTokenModifier } from '@site/src/types/codeToken';
import { Showcase } from './showcase';
import { syncAPIControl } from '@site/src/utils/showcase';

export const BenefitSyncAPI: React.FC = () => (  
  <div className={clsx('benefit-sync-api', style['benefit-sync-api'])}>
    <div className={style['imports']}>
      <CodeBlock code={`import { zuord } from 'zuord';`} modifiers={runtimeImportModifiers} />
      <CodeBlock code={`import { Zuord } from 'zuord';`} />
    </div>
      <div className={style['navbar']}>
        <Showcase container={{
          controls: [
            syncAPIControl('integrate'), syncAPIControl('merge'), syncAPIControl('evolve'), syncAPIControl('pick'), syncAPIControl('omit'),
            syncAPIControl('Integrate'), syncAPIControl('Merge'), syncAPIControl('Evolve'), syncAPIControl('Pick'), syncAPIControl('Omit'),
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

