import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import Bg from "./Images/bg.jpg";
import MorningZ from "./Components/MorningZ";
import EveningZ from "./Components/EveningZ";
import './App.css'

function App() {
  return (
    <Router>
      <div
        className="App"
        // style={{
        //   background: linear-gradient(0, rgba(255, 0, 150, 0.3), rgba(255, 0, 150, 0.3)),
        //   backgroundImage: `url(${Bg})`,
        //   backgroundPosition: "center",
        //   backgroundSize: "cover",
        //   backgroundRepeat: "no-repeat",
        //   width: '100%',
        //   height: '100vh'
        // }}
      >
        <nav>
          <ul>
            <li>
              <Link to="/morning">সকালের যিকির</Link>
            </li>
            <li>
              <Link to="/evening">সন্ধ্যার যিকির</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/morning">
            <MorningZ />
          </Route>
          <Route path="/evening">
            <EveningZ />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
