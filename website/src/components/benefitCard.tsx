import style from '../css/modules/benefitCard.module.scss';
import clsx from 'clsx';

const BenefitCard: React.FC<BenefitCardProps> = ({
    title = "Benefit Title",
    description = "Benefit description goes here.",
}) => (
    <div className={clsx('benefit-card', style['benefit-card'])}>
        <div className={clsx('title', style.title)}>{title}</div>
        <div className={clsx('description', style.description)}>{description}</div>
    </div>
);

export type BenefitCardProps = {
    title?: string;
    description?: string;
};

export default BenefitCard;