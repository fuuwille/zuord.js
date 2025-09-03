export type BenefitsProps = {
    cards: BenefitCardProps[];
};

export type BenefitCardProps = {
    head: {
        title?: string;
        description?: string;
    }
    content?: React.ReactNode;
};