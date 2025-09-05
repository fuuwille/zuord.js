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
        zero: string;
        first: string;
        second: string;
    },
    inspector: {
        head: React.ReactNode,
        body: React.ReactNode;
    },
    design?: {
        className?: string;
    }
}

export type ShowcaseControlProps = {
    id: number;
} & ShowcaseControlData;

export namespace ShowcaseInspectorBodyProps {
    export type Trial = {
        example: React.ReactNode;
        value: React.ReactNode;
        inference: React.ReactNode;
    }
}