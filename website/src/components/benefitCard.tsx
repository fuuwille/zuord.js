import style from '../css/modules/benefitCard.module.scss';

const BenefitCard: React.FC<BenefitCardProps> = ({
    title = "Benefit Title",
    description = "Benefit description goes here.",
}) => (
    <div className={style['benefit-card']}>
        <div className={style.title}>{title}</div>
        <div className={style.description}>{description}</div>
    </div>
);

export type BenefitCardProps = {
    title?: string;
    description?: string;
};

export default BenefitCard;