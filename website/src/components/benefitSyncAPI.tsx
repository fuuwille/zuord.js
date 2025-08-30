import style from '@site/src/css/modules/benefitSyncAPI.module.scss';
import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { CodeBlock } from './codeBlock';
import { CodeTokenModifier } from '@site/src/data/code';
import { Tooltip } from '@mui/material';
import { FeatureField } from './featureField';

export const BenefitSyncAPI: React.FC = () => (  
  <div className={clsx('benefit-sync-api', style['benefit-sync-api'])}>
    <div className={style['imports']}>
      <CodeBlock code={`import { zuord } from 'zuord';`} modifiers={runtimeImportModifiers} />
      <CodeBlock code={`import { Zuord } from 'zuord';`} />
    </div>
      <div className={style['navbar']}>
        <FeatureField text="integrate" className={style['runtime']} /> <FeatureField text="merge" className={style['runtime']} /> <FeatureField text="evolve" className={style['runtime']} /> <FeatureField text="pick" className={style['runtime']} /> <FeatureField text="omit" className={style['runtime']} />
        <FeatureField text="Integrate" className={style['type']} /> <FeatureField text="Merge" className={style['type']} /> <FeatureField text="Evolve" className={style['type']} /> <FeatureField text="Pick" className={style['type']} /> <FeatureField text="Omit" className={style['type']} />
      </div>
  </div>
);

export const runtimeImportModifiers: CodeTokenModifier[] = [
  {
    predicate: (data) => data.text.trim() === "zuord",
    props: { Wrapper: ({ text }) => <span className={style['runtime-import-zuord']}>{text}</span> }
  }
]