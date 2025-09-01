export type ShowcaseProps = {
    controls: ShowcaseControlProps[];
}

export type ShowcaseControlProps = {
    text: {
        default: string;
        focused: string;
    }
}