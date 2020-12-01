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
          value={154}
          cardSubtitle="Traded and Secured on Rally"
          prefix=""
          suffix=""
          decimals={0}
          value2=""
          prefix2=""
          suffix2="Last IPO Fully Funded: #03LEBRON2 (Nov 30, 2020)"
        />
        <CardComponent
          className={styles.recovered}
          cardTitle="Market Value"
          value={17100475+27500+4650+26000+180000+385200}
          lastUpdate={lastUpdate}
          cardSubtitle="Total Market Capitalization of Owned Assets"
          prefix="$"
          suffix=""
          decimals={0}
          value2={385200}
          prefix2="+$"
          suffix2=" in the last trading window (Dec 1, 2020)"
        />
        <CardComponent
          className={styles.deaths}
          cardTitle="Returns"
          value={29}
          lastUpdate={lastUpdate}
          cardSubtitle="Average ROI on assets with atleast one trading window"
          prefix=""
          suffix="%"
          decimals={0}
          value2={500}
          prefix2="Largest Return on IPO: +"
          suffix2="% ('99 Pokémon 1st Ed. Complete Set)"
        />
      </Grid>
    </div>
  );
};

export default Info;