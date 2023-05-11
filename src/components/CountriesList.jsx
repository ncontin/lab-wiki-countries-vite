import React from "react";
import { Link } from "react-router-dom";

function CountriesList({ countries }) {
  console.log(countries);
  return (
    <div>
      <ul>
        {countries.map((country) => (
          <li key={country.alpha3Code}>
            <Link key={country.alpha3Code} to={"/" + country.alpha3Code}>
              <img
                width="50"
                src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                alt={`flag-of-${country.name.common}`}
              />
              <p>{country.name.common}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CountriesList;
