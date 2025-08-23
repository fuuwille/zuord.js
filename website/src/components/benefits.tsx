import style from '../css/modules/benefits.module.scss';
import BenefitCard, { BenefitCardProps } from './benefitCard';

const Benefits: React.FC<BenefitsProps> = ({ cards }) => { 
    const leftCards = []; const rightCards = [];
    cards.forEach((card, index) => (index % 2 ? leftCards : rightCards).push(card));

    return (
        <div className={style['benefits']}>
            {cards.map((card, index) => (
                <BenefitCard key={index} {...card} />
            ))}
        </div>
    );
};

export type BenefitsProps = {
    cards: BenefitCardProps[];
};

export default Benefits;