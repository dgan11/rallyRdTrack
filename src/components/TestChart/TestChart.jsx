import React, { useState, useEffect } from 'react'; //import react and the hooks
import { Line } from 'react-chartjs-2'; // import line and bar chart
import styles from './TestChart.module.css';

const TestChart = ({}) => {

    const test = [
        { name: `'06 Ferrari F430`, ticker: "#06FS1", category: "🏎", ipoDate: "11-01-2020", ipoSharePrice: 12.00, ipoValue: 199000, latestValue: 231000, latestSharePrice: 25.00 },
        { name: `'06 Ferrari F430`, ticker: "#06FS1", category: "🏎", ipoDate: "11-01-2020", ipoSharePrice: 12.00, ipoValue: 199000, latestValue: 231000, latestSharePrice: 25.00 },
        { name: `'06 Ferrari F430`, ticker: "#06FS1", category: "🏎", ipoDate: "11-01-2020", ipoSharePrice: 12.00, ipoValue: 199000, latestValue: 231000, latestSharePrice: 25.00 },
    ]

    ////console.log("HELLO: ", test.map((obj) => (obj.latestSharePrice - obj.ipoSharePrice)/obj.ipoSharePrice));

    const ytdMonths = [
        "Nov 2019","Dec 2019", "Jan 2020", "Feb 2020", "Mar 2020",
        "Apr 2020", "May 2020", "Jun 2020",
        "Jul 2020", "Aug 2020", "Sep 2020",
        "Oct 2020", "Nov 2020"
    ]

    // const ytdDataSPY = [{i=0, highPriceUSD:315}, 322, 331, 338, 312, 290, 304, 323, 326, 349, 357, 352, 360]
    const ytdDataSPY = [
        { i:0, highPriceUSD: 315 }, //Nov
        { i:1, highPriceUSD: 322 }, //Dec
        { i:2, highPriceUSD: 331 }, //Jan
        { i:3, highPriceUSD: 338 }, //Feb
        { i:4, highPriceUSD: 312 }, //March
        { i:5, highPriceUSD: 290 }, //Apr
        { i:6, highPriceUSD: 304 }, //May
        { i:7, highPriceUSD: 323 }, //June
        { i:8, highPriceUSD: 326 }, //July
        { i:9, highPriceUSD: 349 }, //Aug
        { i:10, highPriceUSD: 357 }, //Sep
        { i:11, highPriceUSD: 352 }, // Oct
        { i: 12, highPriceUSD: 360 }] //Nov
    const ytdStartingPriceSPY = 315;

    ////console.log("HELLO: ", ytdDataSPY.map((data) => ((data.highPriceUSD - ytdStartingPriceSPY) / ytdStartingPriceSPY * 100).toFixed(1)))

    const ytdDataPokemon = [
        { i: 0, highPriceUSD: NaN }, //Nov
        { i: 1, highPriceUSD: NaN }, //Dec
        { i: 2, highPriceUSD: NaN }, //Jan
        { i: 3, highPriceUSD: NaN }, //Feb
        { i: 4, highPriceUSD: NaN }, //March
        { i: 5, highPriceUSD: NaN }, //Apr
        { i: 6, highPriceUSD: NaN }, //May
        { i: 7, highPriceUSD: 25 }, //June
        { i: 8, highPriceUSD: NaN }, //July
        { i: 9, highPriceUSD: NaN }, //Aug
        { i: 10, highPriceUSD: NaN }, //Sep
        { i: 11, highPriceUSD: 50 }, // Oct
        { i: 12, highPriceUSD: 80.16 }] //Nov
    const ytdStartingPricePokemon = 25;

    ////console.log("WORK: ", ytdDataPokemon.map((data) => ((data.highPriceUSD - ytdStartingPricePokemon) / ytdStartingPricePokemon * 100).toFixed(1)))
    //console.log("WORK", NaN-10);

    const ytdDataRolexPepsi = [
        { i: 0, highPriceUSD: 8.90 }, //Nov
        { i: 1, highPriceUSD: NaN }, //Dec
        { i: 2, highPriceUSD: NaN }, //Jan
        { i: 3, highPriceUSD: NaN }, //Feb
        { i: 4, highPriceUSD: 11}, //March
        { i: 5, highPriceUSD: NaN }, //Apr
        { i: 6, highPriceUSD: NaN }, //May
        { i: 7, highPriceUSD: NaN }, //June
        { i: 8, highPriceUSD: 13.50 }, //July
        { i: 9, highPriceUSD: NaN }, //Aug
        { i: 10, highPriceUSD: NaN }, //Sep
        { i: 11, highPriceUSD: NaN }, // Oct
        { i: 12, highPriceUSD: 13.50 }] //Nov
    const ytdStartingPriceRolexPepsi = 8.90;

    const ytdDataHarryPotter = [
        { i: 0, highPriceUSD: 24 }, //Nov
        { i: 1, highPriceUSD: NaN }, //Dec
        { i: 2, highPriceUSD: NaN }, //Jan
        { i: 3, highPriceUSD: NaN }, //Feb
        { i: 4, highPriceUSD: NaN }, //March
        { i: 5, highPriceUSD: NaN }, //Apr
        { i: 6, highPriceUSD: NaN }, //May
        { i: 7, highPriceUSD: NaN }, //June
        { i: 8, highPriceUSD: 35 }, //July
        { i: 9, highPriceUSD: NaN }, //Aug
        { i: 10, highPriceUSD: NaN }, //Sep
        { i: 11, highPriceUSD: NaN }, // Oct
        { i: 12, highPriceUSD: 45 }] //Nov
    const ytdStartingPriceHarryPotter = 24;

    const ytdData88Jordan3 = [
        { i: 0, highPriceUSD: 11 }, //Nov
        { i: 1, highPriceUSD: NaN }, //Dec
        { i: 2, highPriceUSD: NaN }, //Jan
        { i: 3, highPriceUSD: NaN }, //Feb
        { i: 4, highPriceUSD: NaN }, //March
        { i: 5, highPriceUSD: 37 }, //Apr
        { i: 6, highPriceUSD: NaN }, //May
        { i: 7, highPriceUSD: NaN }, //June
        { i: 8, highPriceUSD: NaN }, //July
        { i: 9, highPriceUSD: NaN }, //Aug
        { i: 10, highPriceUSD: 49.95 }, //Sep
        { i: 11, highPriceUSD: NaN }, // Oct
        { i: 12, highPriceUSD: NaN }] //Nov
    const ytdStartingPrice88Jordan3 = 11;

    const ytdDataZillowUSHousingIndex = [
        { i: 0, highPriceUSD: 245 }, //Nov
        { i: 1, highPriceUSD: 246 }, //Dec
        { i: 2, highPriceUSD: 247 }, //Jan
        { i: 3, highPriceUSD: 248 }, //Feb
        { i: 4, highPriceUSD: 249 }, //March
        { i: 5, highPriceUSD: 250 }, //Apr
        { i: 6, highPriceUSD: 252 }, //May
        { i: 7, highPriceUSD: 253 }, //June
        { i: 8, highPriceUSD: 254 }, //July
        { i: 9, highPriceUSD: 255 }, //Aug
        { i: 10, highPriceUSD: 257 }, //Sep
        { i: 11, highPriceUSD: 259 }, // Oct
        { i: 12, highPriceUSD: 262 }] //Nov
    const ytdStartingPriceZillowUSHousingIndex = 245;

    // Create a state, dailyData that is an object
    const [dailyData, setDailyData] = useState([]);

    
    // Create the line chart
    // docs = https://www.chartjs.org/docs/latest/charts/line.html#dataset-properties
    const cool = (
            <Line
                data={{
                    //labels: ['mon', 'tues', 'wed', 'thurs', 'fri'],
                    labels: ytdMonths,
                    datasets: [{
                        // S&P 500
                        // map to find the ROI% for each month
                        data: ytdDataSPY.map((data) => ((data.highPriceUSD - ytdStartingPriceSPY) / ytdStartingPriceSPY * 100).toFixed(1)),
                        label: '📊 S&P 500 ETF (SPDR)',
                        borderColor: 'rgba(0, 0, 250, 0.65)',
                        backgroundColor: 'rgba(0, 0, 250, 0.65)',
                        fill: false,
                        borderWidth: 5,
                        spanGaps: true,
                        lineTension: 0,
                        // pointHoverBackgroundColor: 'rgba(250,0,0,0.6)'
                    },
                    {
                        // Pokemon 1st Ed Pokemon Set
                        data: ytdDataPokemon.map((data) => ((data.highPriceUSD - ytdStartingPricePokemon) / ytdStartingPricePokemon * 100).toFixed(1)),
                        label: '🐱 PSA 10 1st Ed. Pokemon Set',
                        borderColor: 'rgba(0, 250, 0, 0.65)',
                        backgroundColor: 'rgba(0, 250, 0, 0.65)',
                        fill: false,
                        borderWidth: 5,
                        spanGaps: true,
                        lineTension: 0,
                        // pointHoverBackgroundColor: 'rgba(250,0,0,0.6)'
                        
                    },
                    {
                        // '18 Rolex GMT MASTER II PEPSI JUBILEE
                        data: ytdDataRolexPepsi.map((data) => ((data.highPriceUSD - ytdStartingPriceRolexPepsi) / ytdStartingPriceRolexPepsi * 100).toFixed(1)),
                        label: `⌚︎ '18 Rolex GMT Master II Pepsi`,
                        borderColor: 'rgba(100, 0, 0, 0.65)',
                        backgroundColor: 'rgba(100, 0, 0, 0.65)',
                        fill: false,
                        borderWidth: 5,
                        spanGaps: true,
                        lineTension: 0,
                        // pointHoverBackgroundColor: 'rgba(250,0,0,0.6)'

                    },
                    // {
                    //     // Harry Potter and the Philosophers Stone 1st Ed.
                    //     data: ytdDataHarryPotter.map((data) => ((data.highPriceUSD - ytdStartingPriceHarryPotter) / ytdStartingPriceHarryPotter * 100).toFixed(1)),
                    //     label: `📘 Harry Potter and the Philosophers Stone 1st Ed.`,
                    //     borderColor: 'rgba(0, 100, 100, 0.65)',
                    //     backgroundColor: 'rgba(0, 100, 100, 0.65)',
                    //     fill: false,
                    //     borderWidth: 5,
                    //     spanGaps: true,
                    //     lineTension: 0,
                    //     // pointHoverBackgroundColor: 'rgba(250,0,0,0.6)'

                    // },
                    {
                        // '88 MICHAEL JORDAN GAME-WORN SNEAKERS
                        data: ytdData88Jordan3.map((data) => ((data.highPriceUSD - ytdStartingPrice88Jordan3) / ytdStartingPrice88Jordan3 * 100).toFixed(1)),
                        label: `👟 '88 Michael Jordan Game-Worn Sneakers`,
                        borderColor: 'rgba(200, 0, 0, 0.65)',
                        backgroundColor: 'rgba(200, 0, 0, 0.65)',
                        fill: false,
                        borderWidth: 5,
                        spanGaps: true,
                        lineTension: 0,
                        // pointHoverBackgroundColor: 'rgba(250,0,0,0.6)'

                    },
                    
                    {
                        // Zillow US Home Value Index
                        data: ytdDataZillowUSHousingIndex.map((data) => ((data.highPriceUSD - ytdStartingPriceZillowUSHousingIndex) / ytdStartingPriceZillowUSHousingIndex * 100).toFixed(1)),
                        label: `🏠 Zillow US Home Value Index`,
                        borderColor: 'rgba(210, 36, 233, 0.65)',
                        backgroundColor: 'rgba(100, 100, 100, 0.65)',
                        fill: false,
                        borderWidth: 5,
                        spanGaps: true,
                        lineTension: 0,
                        // pointHoverBackgroundColor: 'rgba(250,0,0,0.6)'

                    }
                    ],
                }}
                options={{
                    // How to make the Chart Responsive: Do this and do CSS media querys for height!                    
                    responsive: true,
                    maintainAspectRatio: false,

                    title: { display: true, text: `click a box to add/remove an item` },
                    legend: {
                        labels: {
                            boxWidth: 30,
                        },
                        //maxHeightnumber:10,
        
                    },
                    tooltips: {
                        callbacks: {
                            label: function (tooltipItem) {
                                return "ROI: " +  Number(tooltipItem.yLabel) +"%"
                            },
                        },
                        backgroundColor: 'rgba(100,100,100,0.85)',
                        titleFontSize: 16,
                        titleAlign: 'center',
                        bodyFontSize: 16,
                        bodyAlign: 'center',

                    },
                    scales: {
                        yAxes: [
                            {
                                scaleLabel: {
                                    display: true,
                                    labelString: 'Total Gain/Loss %'
                                },
                                ticks: {
                                    autoSkip: true,
                                    // suggestedMax: 250,
                                    // suggestedMin: -20
                                    // min: -20,
                                    // max: 250,
                                    
                                    //  --- Custom Y Axis Ticks depending on value ----
                                    // callback: function (label, index, labels) {
                                    //     console.log("label, index, labels: ", label, index, labels);
                                    //     if (label) {
                                    //         return "Expert: " + label/2.0;
                                    //     }
                                    // }

                                    
                                },
                                gridLines: {
                                    display:true
                                }
                            }
                        ],
                        xAxes: [
                            {
                                scaleLabel: {
                                    display: true,
                                    labelString: "* Data points for Rally assets represent the price at a liquidity event. All data points use the monthly highs to calculate ROI%.",

                                }
                            }
                        ]
                    },
                }}
            />
    );


    return (
        <div className={styles.container} >
            {cool}
        </div>
    )
}

export default TestChart;