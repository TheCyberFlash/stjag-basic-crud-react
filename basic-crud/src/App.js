import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
            <Route exact path="/stjag-basic-crud-react/" element={<Homepage />} />
            <Route exact path="/stjag-basic-crud-react/orders" element={<Orders />} />
            <Route exact path="/stjag-basic-crud-react/customers" element={<Customers />} />
            <Route exact path="/stjag-basic-crud-react/refunds" element={<Refunds />} />
            <Route exact path="/stjag-basic-crud-react/config" element={<Config />} />
            <Route path="/stjag-basic-crud-react/*" element={<NoMatch />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
