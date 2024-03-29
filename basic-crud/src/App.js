import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Homepage from "./components/Homepage";
import Orders from "./components/Orders";
import Customers from "./components/Customers";
import Refunds from "./components/Refunds";
import Config from "./components/Config";
import NoMatch from "./components/NoMatch";
import "./index.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/orders" element={<Orders />} />
            <Route exact path="/customers" element={<Customers />} />
            <Route exact path="/refunds" element={<Refunds />} />
            <Route exact path="/config" element={<Config />} />
            <Route path="/*" element={<NoMatch />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
