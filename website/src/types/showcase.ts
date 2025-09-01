export type ShowcaseProps = {
    controls: ShowcaseControlProps[];
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

export interface ShowcaseControlProps {
    text: {
        default: string;
        focused: string;
    },
    style?: {
        className?: string;
    }
}