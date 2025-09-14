import { PretextProps } from "../types/pretext"
import { Pretext } from "./pretext"

export const DocsapiHead : React.FC<{ pretext: PretextProps, description: string }> = (props) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', gap: '8px' }}>
            <Pretext {...props.pretext} /> :
            <p>{props.description}</p>
        </div>
    )
}