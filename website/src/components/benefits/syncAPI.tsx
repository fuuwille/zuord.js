import style from '@site/src/css/modules/benefits/syncAPI.module.scss';
import clsx from 'clsx';
import { Pretext } from '@site/src/components/pretext';
import { PretextTokenModifier } from '@site/src/types/pretext';
import { Showcase } from '@site/src/components//showcase';
import { syncAPIControl } from '@site/src/utils/benefits/syncAPI';

export const BenefitsSyncAPI: React.FC = () => (  
  <div className={clsx('benefits-sync-api', style['benefits-sync-api'])}>
    <div className={style['imports']}>
      <Pretext text={`import { zuord } from 'zuord';`} modifiers={runtimeImportModifiers} design={{ selectable: false }}/>
      <Pretext text={`import { Zuord } from 'zuord';`} design={{ selectable: false }}/>
    </div>
      <Showcase container={{
        controls: [
          syncAPIControl('integrate'), syncAPIControl('merge'), syncAPIControl('evolve'), syncAPIControl('pick'), syncAPIControl('omit'),
          syncAPIControl('Integrate'), syncAPIControl('Merge'), syncAPIControl('Evolve'), syncAPIControl('Pick'), syncAPIControl('Omit'),
        ],
        design: { columns: 5 }
      }} design={{ className: style['showcase'] }}/>
  </div>
);

export const runtimeImportModifiers: PretextTokenModifier[] = [
  {
    predicate: (data) => data.content.trim() === "zuord",
    props: { Node: ({ content }) => <span className={style['runtime-import-zuord']}>{content}</span> }
  }
]

