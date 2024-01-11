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
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <div className="main">
      {/* <Sidebar/>
    <ContentMain/> */}
      <Router>
        {/* <li>
          <Link to="/about">Home</Link>
        </li> */}
        
        <div>
          <Routes>
            <Route path="/" exact element={<div className="main"><Sidebar/> <ContentMain/> </div>}/>
            <Route path="/budget" element={<div className="adj"><Sidebar/><div className="t2"><Budget/></div> </div>} />
            <Route path="/transactions" element={<div className="adj"><Sidebar/><div className="t2"><DeliveryStatus/></div> </div>} />
            <Route path="/alerts" element={<div className="adj"><Sidebar/><div className="t2"><Alerts/></div> </div>} />
            <Route path="/bills" element={<div className="adj"><Sidebar/><div className="t2"><Budget/></div> </div>} />
            <Route path="/reports" element={<div className="adj"><Sidebar/><div className="t2"><Budget/></div> </div>} />
            <Route path="/savings" element={<div className="adj"><Sidebar/><div className="t2"><Budget/></div> </div>} />
            <Route path="/financial-advice" element={<div className="adj"><Sidebar/><div className="t2"><Budget/></div> </div>} />
            <Route path="/account" element={<div className="adj"><Sidebar/><div className="t2"><Budget/></div> </div>} />
            <Route path="/settings" element={<div className="adj"><Sidebar/><div className="t2"><Budget/></div> </div>} />


          </Routes>
          {/* <Route path="/contact" component={Contact} /> */}
        </div>
        </Router>
      
    </div>
  );
}

export default App;
