import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
// import countries from './countries.json'
import axios from 'axios';

export default class App extends React.Component {
  state = {
    countries: null,
  };

  async componentDidMount() {
    try {
      const { data } = await axios.get('https://restcountries.com/v3.1/all');
      this.setState({
        countries: data,
      });
    } catch (e) {
      console.error(e);
    }
  }
  render() {
    if (!this.state.countries) return <div>Loading...</div>;
    return (
      <div className="App">
        <Navbar></Navbar>
        <div className="container">
          <div className="row">
            <CountriesList countries={this.state.countries}></CountriesList>
            <Switch>
              <Route
                exact
                path="/:cca3"
                render={(props) => {
                  // console.log("what is props", props)
                  return (
                    <CountryDetails
                      {...props}
                      countries={this.state.countries}
                    />
                  );
                }}
              ></Route>
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}
