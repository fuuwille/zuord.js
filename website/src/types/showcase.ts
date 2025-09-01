export type ShowcaseProps = {
    controls: ShowcaseControlProps[];
    style: {
        columns: number;
    }
}

export type ShowcaseControlProps = {
    text: {
        default: string;
        focused: string;
    }
}