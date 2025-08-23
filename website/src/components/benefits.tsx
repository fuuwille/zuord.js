import style from '../css/modules/benefits.module.scss';
import BenefitCard from './benefitCard';

const Benefits: React.FC = () => (
    <div className={style['benefits']}>
        <BenefitCard 
            title="Runtime & Type Harmony"
            description="Zuord provides a fully synchronized API for both runtime behavior and compile-time types." />
    </div>
);

export default Benefits;