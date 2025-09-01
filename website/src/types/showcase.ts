export type ShowcaseContext = {
    control: {
        hovered: HTMLDivElement | null;
        focused: HTMLDivElement | null;
    }
}

export type ShowcaseProps = {
    controls: ShowcaseControlProps[];
    style?: {
        columns: number;
    }
}

export type ShowcaseControlRef = {
    div: HTMLDivElement | null;
    hovered: {
        value: boolean;
        dispatch: React.Dispatch<React.SetStateAction<boolean>>;
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