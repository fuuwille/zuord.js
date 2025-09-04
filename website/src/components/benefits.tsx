import style from '@site/src/css/modules/benefits.module.scss';
import clsx from 'clsx';
import { BenefitsProps, BenefitCardProps } from '@site/src/types/benefits';
import { zuord } from 'zuord';
import { Grid } from '@mui/material';

export const Benefits: React.FC<BenefitsProps> = ({ 
    cards = []
}) => { 
    const leftColumn = []; const rightColumn = [];
    cards.forEach((card, index) => (index % 2 == 0 ? leftColumn : rightColumn).push(card));

    return (
        <div className={clsx('benefits', style['benefits'])}>
            <div className={style['cards']}>
                <Grid container sx={{ display: { xs: "none", lg: "flex" } }}>
                    <Grid size={6}>
                        <div className={style['left-column']}>
                            {leftColumn.map((card, index) => (
                                <BenefitsCard {...card} key={index} />
                            ))}
                        </div>
                    </Grid>
                    <Grid size={6}>
                        <div className={style['right-column']}>
                            {rightColumn.map((card, index) => (
                                <BenefitsCard {...card} key={index} />
                            ))}
                        </div>
                    </Grid>
                </Grid>
                <Grid container sx={{ display: { xs: "flex", lg: "none" } }}>
                    {cards.map((card, index) => (
                        <Grid size={12} key={index}>
                            <BenefitsCard {...card} />
                        </Grid>
                    ))}
                </Grid>
            </div>
        </div>
    );
};

const BenefitsCard: React.FC<BenefitCardProps> = ($props) => {
    const props = zuord.integrate({
        head: {
            title: 'Benefit Title',
            description: 'Benefit description goes here.',
        },
        content: null,
    }, $props);

    return (
        <div className={clsx(style['card'])}>
            <div className={style['head']}>
                <div className={style['title']}>{props.head.title}</div>
                <div className={style['description']}>{props.head.description}</div>
            </div>
            <div className={style['content']}>{props.content}</div>
        </div>
    );
}