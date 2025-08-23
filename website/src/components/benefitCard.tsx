import style from '@site/src/css/modules/benefitCard.module.scss';
import clsx from 'clsx';

const BenefitCard: React.FC<BenefitCardProps> = ({
    title = "Benefit Title",
    description = "Benefit description goes here.",
    content = null,
}) => (
    <div className={clsx('benefit-card', style['benefit-card'])}>
        <div className={style.title}>{title}</div>
        <div className={style.description}>{description}</div>
        {content && <div className={style.content}>{content}</div>}
    </div>
);

export type BenefitCardProps = {
    title?: string;
    description?: string;
    content?: React.ReactNode;
};

export default BenefitCard;