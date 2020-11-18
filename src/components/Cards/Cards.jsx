import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import CardComponent from './Card/Card';
import styles from './Cards.module.css';

const Info = ({ data: { confirmed, recovered, deaths, lastUpdate }, country }) => {
  if (!confirmed) {
    return 'Loading...';
  }


  return (
    <div className={styles.container}>
      {/* <Typography gutterBottom variant="h6" component="h2">Current Case Numbers</Typography> */}
      <Grid container spacing={3} justify="center">
        <CardComponent
          className={styles.infected}
          cardTitle="Assets"
          value={149}
          cardSubtitle="Traded and Secured on the Rally platform"
          prefix=""
          suffix=""
          decimals={0}
          value2={8}
          prefix2="+"
          suffix2=" IPOs this week"
        />
        <CardComponent
          className={styles.recovered}
          cardTitle="Market Value"
          value={16885475}
          lastUpdate={lastUpdate}
          cardSubtitle="Total Market Capitalization of Owned Assets"
          prefix="$"
          suffix=""
          decimals={0}
          value2={300000}
          prefix2="+$"
          suffix2=" in last window"
        />
        <CardComponent
          className={styles.deaths}
          cardTitle="Returns"
          value={34.5}
          lastUpdate={lastUpdate}
          cardSubtitle="Average return on investment across owned assets"
          prefix=""
          suffix="%"
          decimals={1}
          value2={280}
          prefix2="Largest Return on IPO: +"
          suffix2="%"
        />
      </Grid>
    </div>
  );
};

export default Info;