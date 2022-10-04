import React from 'react';
import styles from './HomepageFeatures.module.css';
import Grid from '@material-ui/core/Grid';
import useIsBrowser from '@docusaurus/useIsBrowser';
import { WallClock } from '../components/clock/WallClock';

export default function HomepageFeatures() {
  const isBrowser = useIsBrowser();

  if (isBrowser !== true) {
    return null;
  }

  return (
    <section className={styles.features}>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={12} md={12}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div>
              I refuse to log into twitter so this is where I publish some of my ideas. For example....
              <br/>
              <br/>
              One-handed clocks used to be a thing. So I made these.
              <br/>
              Checkout <a href='/blog/2021/12/05/DigiLog'>this post</a> for a look under the clock face.
            </div>
          </div>
          <br/>
          <br/>
        </Grid>

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
