import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: '婚俗词汇语料库',
    Svg: require('@site/static/img/ring.svg').default,
    description: (
      <>
      </>
    ),
  },
  {
    title: '婚俗同义词组的判定',
    Svg: require('@site/static/img/garment.svg').default,
    description: (
      <>
      </>
    ),
  },
  {
    title: '婚俗同义词组的划分',
    Svg: require('@site/static/img/cake.svg').default,
    description: (
      <>
      </>
    ),
  },
  {
    title: '同义词组差异性分析',
    Svg: require('@site/static/img/tie.svg').default,
    description: (
      <>
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row" style={{width: '100%', justifyContent: 'space-around'}}>
          {FeatureList.slice(0, 2).map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        <div className="row" style={{width: '100%', justifyContent: 'space-around'}}>
          {FeatureList.slice(2, 4).map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
