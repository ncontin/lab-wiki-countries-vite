import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import countriesData from "./countries.json";
import Navbar from "./components/Navbar";
import CountriesList from "./components/CountriesList";
import { Route, Routes } from "react-router-dom";
import CountryDetails from "./components/CountryDetails";

function App() {
  const [countries, setCountries] = useState(countriesData);
  return (
    <div className="App">
      <Navbar />
      <CountriesList countries={countries} />
    </div>
  );
}
export default App;
