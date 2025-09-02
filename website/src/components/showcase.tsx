import style from '@site/src/css/modules/showcase.module.scss';
import clsx from 'clsx';
import { ShowcaseProps, ShowcaseControlProps } from '@site/src/types/showcase';

export const Showcase: React.FC<ShowcaseProps> = ($props) => {
    return (
        <div className={clsx('showcase', style['showcase'])}>
            
        </div>
    );
}

export const ShowcaseControl: React.FC<ShowcaseControlProps> = ($props) => {
    return null;
}