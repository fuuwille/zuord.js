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
    controls: ShowcaseControlProps[];
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

export type ShowcaseControlProps = {
    text: {
        default: string;
        focused: string;
    },
    id?: number;
    style?: {
        className?: string;
    }
}