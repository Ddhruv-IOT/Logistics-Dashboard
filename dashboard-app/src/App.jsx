import { useState } from "react";
import "./App.css";
import ContentMain from "./components/ContentMain/ContentMain";
import Sidebar from "./components/Sidebar/Sidebar";
import DeliveryStatus from "./components/deliveryStatus/deliveryStatus";
import Financial from "./components/Financial/Financial";
import Savings from "./components/Savings/Savings";
// import Subscriptions from "./components/Subscriptions/Subscriptions";
// import Transactions from "./components/Transactions/Transactions";
import performanceCards from "./components/perfromanceCards/perfromanceCards";
import Report from "./components/Report/Report";
import Budget from "./components/Budget/Budget";
import Alerts from "./components/Alerts/Alerts";
import Devices from "./components/Devices/Devices";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <div className="main">
      <Router>


        <Routes>
          {/* <Route path="/" exact element={<div className="main"><Sidebar/> <ContentMain/> </div>}/>
             */}
          <Route path="/" exact element={<div className="adj"><div className="t1"><Sidebar /></div > <div className="t2"><ContentMain /></div> </div>} />
          <Route path="/budget" element={<div className="adj"><div className="t1"><Sidebar /></div><div className="t-cpm"><Budget /></div> </div>} />
          <Route path="/transactions" element={<div className="adj"><div className="t1"><Sidebar /></div ><div className="t-cpm"><DeliveryStatus /></div> </div>} />
          <Route path="/alerts" element={<div className="adj"><div className="t1"><Sidebar /></div ><div className="t-cpm"><Alerts /></div> </div>} />
          <Route path="/devices" element={<div className="adj"><div className="t1"><Sidebar /></div ><div className="t-cpm"><Devices /></div> </div>} />
          <Route path="/reports" element={<div className="adj"><div className="t1"><Sidebar /></div ><div className="t-cpm"><Budget /></div> </div>} />
          <Route path="/savings" element={<div className="adj"><div className="t1"><Sidebar /></div ><div className="t-cpm"><Budget /></div> </div>} />
          <Route path="/financial-advice" element={<div className="adj"><div className="t1"><Sidebar /></div ><div className="t-cpm"><Budget /></div> </div>} />
          <Route path="/account" element={<div className="adj"><div className="t1"><Sidebar /></div ><div className="t-cpm"><Budget /></div> </div>} />
          <Route path="/settings" element={<div className="adj"><div className="t1"><Sidebar /></div ><div className="t-cpm"><Budget /></div> </div>} />


        </Routes>
        {/* <Route path="/contact" component={Contact} /> */}

      </Router>

    </div>
  );
}

export default App;
