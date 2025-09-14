import { PretextProps } from "@site/src/types/pretext"
import { Pretext } from "@site/src/components/pretext"

export const DocsapiHead : React.FC<{ pretext: PretextProps, description: string }> = (props) => {
    return (
        <div  style={{ display: 'flex', alignItems: 'center', gap: '8px', margin: '16px' }}>
            <div style={{ display: 'inline' }}>
                <div
                    style={{
                        display: 'inline-block',
                        minWidth: 'max-content',
                    }}
                >
                    <Pretext {...props.pretext} style={{ padding: 0, margin: 0 }} />
                </div>
                <div
                    style={{
                        display: 'inline',
                        whiteSpace: 'normal',
                        verticalAlign: 'top',
                        lineHeight: '20px'
                    }}
                >
                    : {props.description}
                </div>
            </div>
        </div>
    )
}