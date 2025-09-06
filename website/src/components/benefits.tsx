import style from '@site/src/css/modules/benefits.module.scss';
import clsx from 'clsx';
import { BenefitsHeadProps, BenefitsProps } from '@site/src/types/benefits';
import { zuord } from 'zuord';
import { Pretext } from './pretext';
import { Showcase } from './showcase';
import { benefitsBodyUtil } from '@site/src/utils/benefits';
import { tokenModifier } from '@site/src/utils/pretext';
import { Box } from '@mui/material';
import { benefitsBodyData } from '@site/src/data/benefits';

export const Benefits: React.FC<BenefitsProps> = ($props) => {
    const props = zuord.integrate({
        head: () => <BenefitsHead.Native title={"Benefits Title"} description={"Benefits description goes here."} />,
        body: null,
    }, $props);

    return (
        <div className={clsx(style['benefits'])}>
            <Box className={style['head']}>
                <props.head />
            </Box>
            <Box className={style['body']} display={{ xs: 'none', sm: 'block' }}>
                <props.body />
            </Box>
        </div>
    );
}

export const BenefitsHead = {
    Native: ((props) => (
        <>
            <div className={style['title']}>{props.title}</div>
            <div className={style['description']}>{props.description}</div>
        </>
    )) satisfies React.FC<BenefitsHeadProps.Native>,
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
                    benefitsBodyData.syncAPI.control.integrate,
                    benefitsBodyData.syncAPI.control.merge,
                    benefitsBodyData.syncAPI.control.evolve,
                    benefitsBodyData.syncAPI.control.pick,
                    benefitsBodyData.syncAPI.control.omit
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
                    tokenModifier.animated("integrate", [<div style={{ fontStyle: "italic", fontSize: 13 }}>a function</div>, "integrate", "merge", "evolve", "pick", "omit"]),
                    tokenModifier.animated("Integrate", [<div style={{ fontStyle: "italic", fontSize: 13 }}>It's Type</div>, "Integrate", "Merge", "Evolve", "Pick", "Omit"]),
                ]}
            />
        </div>
    )) satisfies React.FC,
}
