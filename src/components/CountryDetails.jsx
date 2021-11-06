import React from 'react';
import { Link } from 'react-router-dom';
// import CountryDetails from './components/CountryDetails';
export default class CountryDetails extends React.Component {
  render() {
    const country = this.props.countries.find(
      (c) => c.cca3 === this.props.match.params.cca3
    );
    // console.log("here", this.props.match.params)
    return (
      <div className="col-7">
        <h1>{country.name.common}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{ width: '30%' }}>Capital</td>
              <td>{country.capital[0]}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {country.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {country.borders
                    ? country.borders.map((border, i) => {
                        return (
                          <li>
                            <Link key={i} exact to={'/' + border}>
                              <p>
                                {
                                  this.props.countries.find(
                                    (c) => c.cca3 === border
                                  ).name.common
                                }
                              </p>
                            </Link>
                          </li>
                        );
                      })
                    : 'no borders'}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
