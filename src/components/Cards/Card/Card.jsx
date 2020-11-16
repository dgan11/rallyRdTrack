import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Card.module.css';


// CountUP docs: https://github.com/glennreyes/react-countup#separator-string

const CardComponent = ({ className, cardTitle, value, cardSubtitle, value2, prefix, suffix, decimals}) => (

    <Grid item xs={12} md={3} component={Card} className={cx(styles.card, className)}>
        <CardContent>
            <Typography color="textSecondary" gutterBottom>
                {cardTitle}
            </Typography>
            <Typography variant="h5" component="h2">
                <CountUp start={0} end={value} duration={2.75} separator="," prefix={prefix} suffix={suffix} decimals={decimals} />
            </Typography>
            <Typography variant="body2" component="p">
                {cardSubtitle}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="">
                <CountUp delay={0.5} start={0} align='center' end={5} duration={4} separator="," />
            </Typography>
        </CardContent>
    </Grid>
);

export default CardComponent;