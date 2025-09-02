export type ShowcaseState = {
    pos: number;
    hovered: ShowcaseControlState;
    focused: ShowcaseControlState;
    inspected: ShowcaseControlState;

    setHovered: (state: ShowcaseControlState) => void;
    setFocused: (state: ShowcaseControlState) => void;
    setInspected: (state: ShowcaseControlState) => void;
}

export type ShowcaseProps = {
    panel: ShowcasePanelProps;
}

export type ShowcasePanelProps = {
    controls: ShowcaseControlProps[];
    design: {
        columns: number;
    }
}

export type ShowcaseControlState = {
    id: number;
    props: ShowcaseControlProps;
    isHovered: boolean;     setIsHovered: (value: boolean) => void;
    isFocused: boolean;     setIsFocused: (value: boolean) => void;
    isInspected: boolean;   setIsInspected: (value: boolean) => void;
}

export type ShowcaseControlProps = {
    text: {
        default: string;
        focused: string;
    }
}