import style from '@site/src/css/modules/benefits.module.scss';
import clsx from 'clsx';
import { BenefitsProps } from '@site/src/types/benefits';
import { zuord } from 'zuord';
import { Pretext } from './pretext';
import { Showcase } from './showcase';
import { benefitsBody } from '@site/src/utils/benefits';
import { controlData } from '@site/src/data/benefits/syncAPI';
import { tokenModifier } from '@site/src/utils/pretext';

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

export const BenefitsBody = {
    SyncAPI: (() => (  
        <div className={clsx(style['sync-api'])}>
            <div className={style['imports']}>
                <Pretext text={`import { zuord } from 'zuord';`} design={{ selectable: false, preWrap: false }} modifiers={[tokenModifier.const("zuord")]}/>
                <Pretext text={`import { Zuord } from 'zuord';`} design={{ selectable: false, preWrap: false }} modifiers={[tokenModifier.type("Zuord")]}/>
            </div>
            <Showcase container={{
                controls: [
                    benefitsBody.syncAPI.control(controlData.integrate), benefitsBody.syncAPI.control(controlData.merge), benefitsBody.syncAPI.control(controlData.evolve), benefitsBody.syncAPI.control(controlData.pick), benefitsBody.syncAPI.control(controlData.omit),
                    benefitsBody.syncAPI.control(controlData.Integrate), benefitsBody.syncAPI.control(controlData.Merge), benefitsBody.syncAPI.control(controlData.Evolve), benefitsBody.syncAPI.control(controlData.Pick), benefitsBody.syncAPI.control(controlData.Omit),
                ],
                design: { columns: 5 }
            }} design={{ className: style['showcase'] }}/>
        </div>
    )) satisfies React.FC,
    ZeroCostRT: (() => (
        <div className={clsx(style['zero-cost-rt'])}>
            <Pretext
                text={`zuord.integrate = function ( ... ) : Zuord.Integrate => { ... }`}
                design={{ selectable: false, preWrap: false }}
                modifiers={[
                    tokenModifier.const("zuord"),
                    tokenModifier.func("integrate", '(...)'),
                    tokenModifier.animated("integrate", ["integrate", "merge", "evolve", "pick", "omit"]),
                    tokenModifier.animated("Integrate", ["Integrate", "Merge", "Evolve", "Pick", "Omit"]),
                ]}
            />
        </div>
    )) satisfies React.FC,
}
