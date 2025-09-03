import style from '@site/src/css/modules/benefits.module.scss';
import BenefitCard, { BenefitCardProps } from './benefitCard';
import clsx from 'clsx';
import { BenefitsProps } from '@site/src/types/benefits';

const Benefits: React.FC<BenefitsProps> = ({ 
    cards = []
}) => { 
    const leftColumn = []; const rightColumn = [];
    cards.forEach((card, index) => (index % 2 == 0 ? leftColumn : rightColumn).push(card));

    return (
        <div className={clsx('benefits', style['benefits'])}>
            <div className={style['cards']}>
                <div className={style['left-column']}>
                    {leftColumn.map((card, index) => (
                        <BenefitCard key={index} {...card} />
                    ))}
                </div>
                <div className={style['right-column']}>
                    {rightColumn.map((card, index) => (
                        <BenefitCard key={index} {...card} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Benefits;