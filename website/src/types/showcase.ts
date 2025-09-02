export type ShowcaseState = {
    
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

export type ShowcaseControlProps = {
    text: {
        default: string;
        focused: string;
    }
}