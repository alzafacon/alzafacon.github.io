import React from 'react';
import styles from './HomepageFeatures.module.css';
import Grid from '@material-ui/core/Grid';
import { WallClock } from '../components/clock/WallClock';

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={6} md={3}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <WallClock timeZone="local" label="Local"/>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <WallClock timeZone="Europe/Madrid" label="Madrid" />
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <WallClock timeZone="Asia/Tokyo" label="Tokyo" />
          </div>
        </Grid>
      </Grid>
    </section>
  );
}
