export type ShowcaseRef = {
    div: HTMLDivElement;
    target: ShowcaseControlRef
    data: {
        content: ShowcaseControlData;
        dispatch: React.Dispatch<React.SetStateAction<ShowcaseControlData>>;
    };
}

export type ShowcaseProps = {
    container: ShowcaseContainerProps;
    design?: {
        className?: string;
    }
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
    isFocused: boolean;     setIsFocused: (value: boolean) => void;
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