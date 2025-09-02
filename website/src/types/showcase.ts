export type ShowcaseState = {
    inspector: ShowcaseInspectorRef;

    hovered: ShowcaseControlRef;
    focused: ShowcaseControlRef;
    inspected: ShowcaseControlRef;

    setHovered: (state: ShowcaseControlRef) => void;
    setFocused: (state: ShowcaseControlRef) => void;
    setInspected: (state: ShowcaseControlRef) => void;
}

export type ShowcaseProps = {
    container: ShowcaseContainerProps;
}

export type ShowcaseContainerProps = {
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
    },
    inspector: {
        head: {
            title: React.ReactNode;
        },
        body: ShowcaseControlBody;
    },
    design?: {
        className?: string;
    }
}

export type ShowcaseControlBody = {
    code: React.ReactNode;
    result: {
        type: React.ReactNode;
        runtime: React.ReactNode;
    }
}

export type ShowcaseControlProps = {
    id: number;
} & ShowcaseControlData;

export type ShowcaseInspectorRef = {
    state: ShowcaseInspectorState;
}

export type ShowcaseInspectorState = {
    data: ShowcaseControlData;
    setData: (data: ShowcaseControlData) => void;
}