import React from 'react';

import { Cards} from './components';
import { fetchData } from './api/';
import styles from './App.module.css';
import EnhancedTable from "./components/EnhancedTable/EnhancedTable";
import TestChart from "./components/TestChart/TestChart";

class App extends React.Component {

  // set the States
  state = {
    data: {},
    country: '',
  }

  // Retrieve the data
  async componentDidMount() {
    const fetchedData = await fetchData()
    ////console.log("fetched data: ", fetchedData);
    this.setState({ data: fetchedData });
  }

  // Handle what happens when a country is selected
  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country); // fetch the data for the specific country
    ////console.log("country selected: ", country);
    ////console.log("data for selected country: ", fetchedData);
    this.setState({data: fetchedData, country:country})
  }

  render() {
    // destructure this.state.data
    const { data, country } = this.state;
    //console.log("data Sent to Charts: ", data);
    return (
      <div className={styles.container}>
        <h1 id="top">Rally Rd Track 🏁</h1>
        <Cards data={data} country={country} />

        <h2 id="compare-assets">Year-to-Date Comparison of Asset Classes</h2>
        {/* <Chart data={data} country={country}/> */}
        <TestChart />
        <p id="chart-qualifier">*Data points for Rally assets represent the price at a liquidity event. All data points use the monthly highs to calculate ROI%.</p> 

        <h2 id="historic-data">Historic Data</h2>
        <EnhancedTable />
        <p id="table-qualifier">*Only showing offerings with atleast one trading window</p>

      </div>
    )
  }
}

export default App;