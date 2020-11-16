import React from 'react';

import { Cards, CountryPicker, Chart } from './components';
import { fetchData } from './api/';
import styles from './App.module.css';
import coronaImage from './images/image.png';

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
    ////console.log("data sending to Cards: ", data);
    return (
      <div className={styles.container}>
        <h1 id="top">Rally Rd Track 🏁</h1>
        {/* <img className={styles.image} src={coronaImage} alt="corona image" /> */}
        <Cards data={data} country={country} />
        <Chart data={data} country={country}/>

      </div>
    )
  }
}

export default App;