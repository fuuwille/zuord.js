export type ShowcaseRef = {
    control: {
        hovered: ShowcaseControlRef | null;
        focused: ShowcaseControlRef | null;
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
    },
    focused: {
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