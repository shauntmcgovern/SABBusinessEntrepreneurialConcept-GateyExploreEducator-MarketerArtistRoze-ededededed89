//the function of the React'App
import logo from './logo.svg';
import './App.css';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";//I do see this library installed in my project
import { Doughnut } from "react-chartjs-2";//I do not see this library installed in my project-- so I did this now it is there and avail'npm i react-chartjs-2 chart.js)):/')):-;


ChartJS.register(ArcElement, Tooltip, Legend);
//what this does is run the ChartJS-'method' the register method that requires the ArcElement and Tooltip and Legend to pass on through this Javascript'React'Method


//<Doughnut data={...} />//this isn't ready yet I am assuming here, you enter the 'information' with the '...' to complete this

function App() {
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
