export type ShowcaseProps = {
    controls: ShowcaseControlProps[];
    style?: {
        columns: number;
    }
}

export type ShowcaseContext = {

}

export interface ShowcaseControlData {
    text: {
        default: string;
        focused: string;
    },
    style?: {
        className?: string;
    }
}

export interface ShowcaseControlProps extends ShowcaseControlData {
    
}