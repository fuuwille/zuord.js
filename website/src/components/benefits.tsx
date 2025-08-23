import style from '../css/modules/benefits.module.scss';
import BenefitCard, { BenefitCardProps } from './benefitCard';

const Benefits: React.FC<BenefitsProps> = ({ cards }) => (
    <div className={style['benefits']}>
        {cards.map((card, index) => (
            <BenefitCard key={index} {...card} />
        ))}
    </div>
);

export type BenefitsProps = {
    cards: BenefitCardProps[];
};

export default Benefits;