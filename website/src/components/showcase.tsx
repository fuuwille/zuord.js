import { ShowcaseProps, ShowcaseControlProps } from "@site/src/types/showcase"
import { zuord } from "zuord"

export const Showcase: React.FC<ShowcaseProps> = () => {
    return (
        null
    )
}

export const ShowcaseControl: React.FC<ShowcaseControlProps> = ($props) => {
    const props = zuord.integrate({
        text: {
            default: "showcase",
            focused: "showcase X"
        }
    }, $props);

    return (
        null
    )
}