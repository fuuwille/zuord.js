import { Ref } from "react";

export type ShowcaseRef = {
    hovered: ShowcaseControlRef
    focused: ShowcaseControlRef
}

export type ShowcaseProps = {
    controls: ShowcaseControlProps[];
    style?: {
        columns: number;
    }
}

export type ShowcaseControlRef = {
    element: HTMLDivElement | null;
    isHovered: {
        value: boolean;
        dispatch: React.Dispatch<React.SetStateAction<boolean>>;
    },
    isFocused: {
        value: boolean;
        dispatch: React.Dispatch<React.SetStateAction<boolean>>;
    },
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