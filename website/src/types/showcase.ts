export type ShowcaseState = {
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
    isHovered: boolean;
    isFocused: boolean;
    isInspected: boolean;
}

export type ShowcaseControlProps = {
    text: {
        default: string;
        focused: string;
    }
}