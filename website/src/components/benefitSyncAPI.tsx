import style from '@site/src/css/modules/benefitSyncAPI.module.scss';
import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { CodeBlock } from './codeBlock';
import { CodeTokenModifier } from '@site/src/data/code';
import { Tooltip } from '@mui/material';

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
  const [hovered, setHovered] = useState(false);
  const [tooltip, setTooltip] = useState(false);
  const featured = hovered || tooltip;
  
  let type, passiveText = `.${text}`, activeText;

  if(text[0] === text[0].toLowerCase()) {
    type = 'runtime';
    activeText = `${text}()`;
  }
  else {
    type = 'type';
    activeText = `${text}<>`;
  }

  return (
    <div className={clsx(style['box'], style[type], featured ? style['featured'] : null)}>
      <span className={style['layout']} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
        <Tooltip 
          title={passiveText} 
          onOpen={() => setTooltip(true)} 
          onClose={() => setTooltip(false)}
          enterDelay={250}
          enterNextDelay={250}
          leaveDelay={100}
        >
          <span className={style['text']}>{passiveText}</span>
        </Tooltip>
      </span>
      <span className={style['visual']}>
        <span className={clsx(style['text'], style['passive'])}>{passiveText}</span>
        <span className={clsx(style['text'], style['active'])}>{activeText}</span>
      </span>
    </div>
  )
}