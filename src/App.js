import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useQuery } from "@apollo/react-hooks"
import { gql } from "apollo-boost"

export const EXCHANGE_RATES = gql`
  {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(EXCHANGE_RATES)

  // console.log(loading)
  // console.log(error)
  // console.log(data)

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error :(</p>;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
