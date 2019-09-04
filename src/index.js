import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router } from 'react-router-dom'
import Header from './components/Header'
import Footeh from './components/Footeh';
import routes from './routes';
import "./styles.css";

function App() {
  return (
    <Router>
      <Header />
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
      {routes}
      <Footeh />
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
