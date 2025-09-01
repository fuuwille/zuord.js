import { Ref } from "react";

export type ShowcaseRef = {
    hovered: {
        value: ShowcaseControlRef | null;
        dispatch: React.Dispatch<React.SetStateAction<ShowcaseControlRef | null>>;
    }
    focused: {
        value: ShowcaseControlRef | null;
        dispatch: React.Dispatch<React.SetStateAction<ShowcaseControlRef | null>>;
    }
}

export type ShowcaseProps = {
    controls: ShowcaseControlDate[];
    style?: {
        columns: number;
    }
}

export type ShowcaseControlRef = {
    hovered: {
        value: boolean;
        dispatch: React.Dispatch<React.SetStateAction<boolean>>;
    },
    focused: {
        value: boolean;
        dispatch: React.Dispatch<React.SetStateAction<boolean>>;
    }
}

export interface ShowcaseControlDate {
    text: {
        default: string;
        focused: string;
    },
    style?: {
        className?: string;
    }
}

export interface ShowcaseControlProps extends ShowcaseControlDate {
    id: number;
}