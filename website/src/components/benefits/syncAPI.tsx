import style from '@site/src/css/modules/benefits/syncAPI.module.scss';
import clsx from 'clsx';
import { Pretext } from '@site/src/components/pretext';
import { Showcase } from '@site/src/components//showcase';
import { syncAPIControl } from '@site/src/utils/benefits/syncAPI';
import { controlData } from '@site/src/data/benefits/syncAPI';
import { tokenModifier } from '@site/src/utils/pretext';

export const BenefitsSyncAPI: React.FC = () => (  
  <div className={clsx('benefits-sync-api', style['benefits-sync-api'])}>
    <div className={style['imports']}>
      <Pretext text={`import { zuord } from 'zuord';`} design={{ selectable: false, preWrap: false }} modifiers={[tokenModifier.const("zuord")]}/>
      <Pretext text={`import { Zuord } from 'zuord';`} design={{ selectable: false, preWrap: false }} modifiers={[tokenModifier.type("Zuord")]}/>
    </div>
      <Showcase container={{
        controls: [
          syncAPIControl(controlData.integrate), syncAPIControl(controlData.merge), syncAPIControl(controlData.evolve), syncAPIControl(controlData.pick), syncAPIControl(controlData.omit),
          syncAPIControl(controlData.Integrate), syncAPIControl(controlData.Merge), syncAPIControl(controlData.Evolve), syncAPIControl(controlData.Pick), syncAPIControl(controlData.Omit),
        ],
        design: { columns: 5 }
      }} design={{ className: style['showcase'] }}/>
  </div>
);