import style from '@site/src/css/modules/benefits.module.scss';
import clsx from 'clsx';
import { BenefitsProps } from '@site/src/types/benefits';
import { zuord } from 'zuord';
import { Pretext } from './pretext';
import { Showcase } from './showcase';
import { syncAPIControl } from '../utils/benefits/syncAPI';
import { controlData } from '../data/benefits/syncAPI';
import { tokenModifier } from '../utils/pretext';

export const Benefits: React.FC<BenefitsProps> = ($props) => {
    const props = zuord.integrate({
        head: {
            title: 'Benefits Title',
            description: 'Benefits description goes here.',
        },
        content: null,
    }, $props);

    return (
        <div className={clsx(style['benefits'])}>
            <div className={style['head']}>
                <div className={style['title']}>{props.head.title}</div>
                <div className={style['description']}>{props.head.description}</div>
            </div>
            <div className={style['content']}>{props.content}</div>
        </div>
    );
}

export const SyncAPIBody: React.FC = () => (  
    <div className={clsx(style['sync-api'])}>
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