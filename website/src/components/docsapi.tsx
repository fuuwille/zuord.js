import style from '@site/src/css/modules/docsapi.module.scss';
import { PretextProps } from "@site/src/types/pretext"
import { Pretext } from "@site/src/components/pretext"

export const DocsapiDefinition : React.FC<{ pretext: PretextProps, description: string }> = (props) => {
    return (
        <div className={style['docsapi-definition']}>
            <div className={style['content']}>
                <div className={style['head']}>
                    <Pretext {...props.pretext} style={{ display: 'inline', padding: 0, margin: 0 }} design={{ selectable: true }} />
                </div>
                <div className={style['separator']}>
                    :
                </div>
                <div className={style['label']}>
                    {props.description}
                </div>
            </div>
        </div>
    )
}

export const DocsapiSignature: React.FC<{ pretext: PretextProps }> = (props) => {
    return (
        <div className={style['docsapi-signature']}>
            <Pretext {...props.pretext} design={{ flatten: false }} />
        </div>
    )
}