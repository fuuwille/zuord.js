import style from '@site/src/css/modules/docsapi.module.scss';
import { PretextProps } from "@site/src/types/pretext"
import { Pretext } from "@site/src/components/pretext"

export const DocsapiHead : React.FC<{ pretext: PretextProps, description: string }> = (props) => {
    return (
        <div className={style['docsapi-head']}>
            <div className={style['content']}>
                <div className={style['tag']}>
                    <Pretext {...props.pretext} style={{ padding: 0, margin: 0 }} design={{ selectable: true }} />
                </div>
                <div className={style['separator']}>
                    :
                </div>
                <div className={style['description']}>
                    {props.description}
                </div>
            </div>
        </div>
    )
}