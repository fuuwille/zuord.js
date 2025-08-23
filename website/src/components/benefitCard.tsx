export const BenefitCard: React.FC<BenefitCardProps> = ({
    title = "Benefit Title",
    description = "Benefit description goes here.",
}) => (
    <div className="benefit-card">
        <div className="title">{title}</div>
        <div className="description">{description}</div>
    </div>
);

export type BenefitCardProps = {
    title?: string;
    description?: string;
};