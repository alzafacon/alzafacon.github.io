import React from 'react';
import clsx from 'clsx';
import useThemeContext from '@theme/hooks/useThemeContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  const { isDarkTheme } = useThemeContext();

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
        {isDarkTheme
          ? <img src={"/img/starry_night_full.jpg"}  style={{'width': '100%'}}/>
          : <img src={"https://images.metmuseum.org/CRDImages/ep/original/DT1567.jpg"}  />
        }
    </header>
  );
}

export default function Home() {
  return (
    <Layout title='Fidel Coria'>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
