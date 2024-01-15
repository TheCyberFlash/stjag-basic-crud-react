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
          {/* <Route exact path="/orders" component={Orders} /> */}
          {/* <Route exact path="/customers" component={Customers} /> */}
          {/* <Route exact path="/refunds" component={Refunds} /> */}
          {/* <Route exact path="/config" component={Config} /> */}
          {/* <Route component={NoMatch} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
