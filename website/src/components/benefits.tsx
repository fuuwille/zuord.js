import style from '@site/src/css/modules/benefits.module.scss';
import clsx from 'clsx';
import { BenefitsProps } from '@site/src/types/benefits';
import { zuord } from 'zuord';

export const Benefits: React.FC<BenefitsProps> = ($props) => {
    const props = zuord.integrate({
        head: {
            title: 'Benefits Title',
            description: 'Benefits description goes here.',
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