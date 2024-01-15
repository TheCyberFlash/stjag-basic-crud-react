import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Homepage from "./components/Homepage";

function App() {
  return (
    <Router>
      <div>
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          {/* <Route exact path="/orders" element={<Orders />} /> */}
          {/* <Route exact path="/customers" element={<Customers />} /> */}
          {/* <Route exact path="/refunds" element={<Refunds />} /> */}
          {/* <Route exact path="/config" element={<Config />} /> */}
          {/* <Route component={NoMatch} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
