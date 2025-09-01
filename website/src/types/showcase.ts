export type ShowcaseProps = {
    controls: ShowcaseControlData[];
    style?: {
        columns: number;
    }
}

export type ShowcaseContext = {
    control: {
        hovered: HTMLDivElement | null;
        focused: HTMLDivElement | null;
    }
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
    context: ShowcaseContext;
}