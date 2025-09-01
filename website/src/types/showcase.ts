export type ShowcaseProps = {
    controls: ShowcaseControlProps[];
    style?: {
        columns: number;
    }
}

export type ShowcaseContext = {

}

export type ShowcaseControlProps = {
    text: {
        default: string;
        focused: string;
    },
    style?: {
        className?: string;
    }
}