import style from '@site/src/css/modules/benefitSyncAPI.module.scss';
import clsx from 'clsx';
import { CodeBlock } from './codeBlock';
import { CodeTokenModifier } from '@site/src/data/code';

export const BenefitSyncAPI: React.FC = () => (  
  <div className={clsx('benefit-sync-api', style['benefit-sync-api'])}>
    <div className={style['imports']}>
      <CodeBlock code={`import { zuord } from 'zuord';`} modifiers={runtimeImportModifiers} />
      <CodeBlock code={`import { Zuord } from 'zuord';`} />
    </div>
      <div className={style['navbar']}>
        <Box text="integrate" /> <Box text="merge" /> <Box text="evolve" /> <Box text="pick" /> <Box text="omit" />
        <Box text="Integrate" /> <Box text="Merge" /> <Box text="Evolve" /> <Box text="Pick" /> <Box text="Omit" />
      </div>
  </div>
);

export const runtimeImportModifiers: CodeTokenModifier[] = [
  {
    predicate: (data) => data.text.trim() === "zuord",
    props: { Wrapper: ({ text }) => <span className={style['runtime-import-zuord']}>{text}</span> }
  }
]

const Box: React.FC<{ text: string }> = ({ text }) => {
  let type;

  if(text[0] === text[0].toLowerCase()) {
    type = 'runtime';
  }
  else {
    type = 'type';
  }

  return (
    <div className={clsx(style['box'], style[type])}>
      <span className={clsx(style['text'], style['passive'])}>{`.${text}`}</span>
      <span className={clsx(style['text'], style['active'])}>Yeni Yazı</span>
    </div>
  )
}