import React from 'react';
import { Link } from 'react-router-dom';


export default function CountryDetails({ countries }) {
  return (
    <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      {countries.map((country) => {
        console.log(country);
        return (
          <div className="list-group">
            <Link
              className="list-group-item list-group-item-action"
              to={'/' + country.cca3}
            >
              {country.name.common}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
