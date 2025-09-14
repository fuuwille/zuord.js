import { PretextProps } from "@site/src/types/pretext"
import { Pretext } from "@site/src/components/pretext"

export const DocsapiHead : React.FC<{ pretext: PretextProps, description: string }> = (props) => {
    return (
    <div style={{ display: 'inline' }}>
        <div
            style={{
                display: 'inline-block',
                minWidth: 'max-content',
                verticalAlign: 'top',
            }}
        >
            <Pretext {...props.pretext} />
        </div>
        <div
            style={{
                display: 'inline',
                whiteSpace: 'normal',
                verticalAlign: 'top',
            }}
        >
            {props.description}
        </div>
    </div>
    )
}