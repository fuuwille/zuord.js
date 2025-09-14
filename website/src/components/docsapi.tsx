import { PretextProps } from "@site/src/types/pretext"
import { Pretext } from "@site/src/components/pretext"

export const DocsapiHead : React.FC<{ pretext: PretextProps, description: string }> = (props) => {
    return (
        <div  style={{ display: 'flex', alignItems: 'center', gap: '8px', margin: '16px 0' }}>
            <div style={{ display: 'inline' }}>
                <div
                    style={{
                        padding: '0 6px',
                        marginRight: '6px',
                        border: '1px solid #ccc',
                        display: 'inline-block',
                        minWidth: 'max-content',
                        borderRadius: '8px',
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