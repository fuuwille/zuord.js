import style from '@site/src/css/modules/benefitSyncAPI.module.scss';
import clsx from 'clsx';
import { Pretext } from './pretext';
import { PretextTokenModifier } from '@site/src/types/pretext';
import { Showcase } from './showcase';
import { syncAPIControl } from '@site/src/utils/showcase';

export const BenefitSyncAPI: React.FC = () => (  
  <div className={clsx('benefit-sync-api', style['benefit-sync-api'])}>
    <div className={style['imports']}>
      <Pretext text={`import { zuord } from 'zuord';`} modifiers={runtimeImportModifiers} />
      <Pretext text={`import { Zuord } from 'zuord';`} />
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

export const runtimeImportModifiers: PretextTokenModifier[] = [
  {
    predicate: (data) => data.content.trim() === "zuord",
    props: { Node: ({ content }) => <span className={style['runtime-import-zuord']}>{content}</span> }
  }
]

