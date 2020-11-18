import React, { useState, useEffect } from 'react'; //import react and the hooks
import { fetchDailyData } from '../../api'; //import the fetchDailyData function from api/index.js
import { Line} from 'react-chartjs-2'; // import line and bar chart

import styles from './Chart.module.css'
import axios from "axios";

const Chart = ({ data: { confirmed, deaths, recovered }, country }) => {
  
  // const itemData = [
  //   {name: "pokemon", ipoPrice={ value:12.50 }, ipoDate="11-01-2020", latestPrice={value:25.00}},
  //   {name: "wine", ipoPrice=12.50, ipoDate="11-01-2020", latestPrice=25.00},
  // ]

  const test = [
    { name: `'06 Ferrari F430`, ticker:"#06FS1"  ,category: "🏎", ipoDate: "11-01-2020", ipoSharePrice: 12.00, ipoValue:199000, curValue:231000 ,latestSharePrice:25.00 },
    { name: `'06 Ferrari F430`, ticker:"#06FS1"  ,category: "🏎", ipoDate: "11-01-2020", ipoSharePrice: 12.00, ipoValue:199000, curValue:231000 ,latestSharePrice:25.00 },
    { name: `'06 Ferrari F430`, ticker:"#06FS1"  ,category: "🏎", ipoDate: "11-01-2020", ipoSharePrice: 12.00, ipoValue:199000, curValue:231000 ,latestSharePrice:25.00 },
  ]

  // Create a state, dailyData that is an object
  const [dailyData, setDailyData] = useState([]);

  // useEffect method -- tell react that this component needs to do something after render
  useEffect(() => {
    // Di this in a seperate function bc async useEffect can cause data race issues
    const fetchMyAPI = async () => {
      setDailyData(await fetchDailyData());
    }
    fetchMyAPI();
  }, []); // only happens once

  ///console.log("DATA FOR CHARTS: ", dailyData);

  const lineChart = (
    dailyData[0] ? (
      <Line
        data={{
          labels: dailyData.map(({ date }) => new Date(date).toLocaleDateString()),
          datasets: [{
            data: dailyData.map((data) => data.confirmed),
            label: 'Infected',
            borderColor: '#3333ff',
            fill: true,
          }, {
            data: dailyData.map((data) => data.deaths),
            label: 'Deaths',
            borderColor: 'red',
            backgroundColor: 'rgba(255, 0, 0, 0.5)',
            fill: true,
          }, {
            data: dailyData.map((data) => data.recovered),
            label: 'Recovered',
            borderColor: 'green',
            backgroundColor: 'rgba(0, 255, 0, 0.5)',
            fill: true,
          },
          ],
        }}
        options={{
          //title: { display: true, text: `Total Number of Cases in the USA` },
          responsive: true,
          maintainAspectRatio: true,
        }}
      />
    ) : null
  );


  return (
    <div className={styles.container}>
      {lineChart}
    </div>
  )
}

export default Chart;