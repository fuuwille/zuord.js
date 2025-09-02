export type ShowcaseState = {
    pos: number;
    hovered: ShowcaseControlRef;
    focused: ShowcaseControlRef;
    inspected: ShowcaseControlRef;

    setHovered: (state: ShowcaseControlRef) => void;
    setFocused: (state: ShowcaseControlRef) => void;
    setInspected: (state: ShowcaseControlRef) => void;
}

export type ShowcaseProps = {
    panel: ShowcasePanelProps;
}

export type ShowcasePanelProps = {
    controls: ShowcaseControlData[];
    design: {
        columns: number;
    }
}

export type ShowcaseControlRef = {
    props: ShowcaseControlProps;
    state: ShowcaseControlState;
}

export type ShowcaseControlState = {
    isHovered: boolean;     setIsHovered: (value: boolean) => void;
    isFocused: boolean;     setIsFocused: (value: boolean) => void;
    isInspected: boolean;   setIsInspected: (value: boolean) => void;
}

export type ShowcaseControlData = {
    text: {
        default: string;
        focused: string;
    }
}

export type ShowcaseControlProps = {
    id: number;
} & ShowcaseControlData;