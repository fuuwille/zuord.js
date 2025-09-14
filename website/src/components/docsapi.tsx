import { PretextProps } from "../types/pretext"
import { Pretext } from "./pretext"

export const DocsapiHead : React.FC<{ pretext: PretextProps }> = (props) => {
    return (
        <div>
            <Pretext {...props.pretext} />
        </div>
    )
}