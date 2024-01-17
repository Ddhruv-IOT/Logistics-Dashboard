import { useState } from "react";
import "./App.css";
import ContentMain from "./layout/ContentMain/ContentMain";
import Sidebar from "./components/Sidebar/Sidebar";
import DeliveryStatus from "./components/deliveryStatus/deliveryStatus";
import Alerts from "./components/Alerts/Alerts";
import Devices from "./components/Devices/Devices";

import BudgetPage from "./layout/BudgetFullPage/Bfp";
import Budget from "./components/FinancialComponents/Budget/Budget";
import "./components/deliveryStatus/deliveryStatus.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <div className="main">
      <Router>
        <Routes>
          <Route
            path="/"
            exact
            element={
              <div className="adj">
                <div className="t1">
                  <Sidebar />
                </div>{" "}
                <div className="t2">
                  <ContentMain />
                </div>{" "}
              </div>
            }
          />
          <Route
            path="/budget"
            element={
              <div className="adj">
                <div className="t1">
                  <Sidebar />
                </div>
                <div className="t-cpm">
                  <BudgetPage />
                </div>{" "}
              </div>
            }
          />
          <Route
            path="/transactions"
            element={
              <div className="adj">
                <div className="t1">
                  <Sidebar />
                </div>
                <div className="t-cpm grid-c7-content-override">
                  <DeliveryStatus />
                </div>{" "}
              </div>
            }
          />
          <Route
            path="/alerts"
            element={
              <div className="adj">
                <div className="t1">
                  <Sidebar />
                </div>
                <div className="t-cpm">
                  <Alerts />
                </div>{" "}
              </div>
            }
          />
          <Route
            path="/devices"
            element={
              <div className="adj">
                <div className="t1">
                  <Sidebar />
                </div>
                <div className="t-cpm">
                  <Devices />
                </div>{" "}
              </div>
            }
          />
          <Route
            path="/reports"
            element={
              <div className="adj">
                <div className="t1">
                  <Sidebar />
                </div>
                <div className="t-cpm">
                  <Budget />
                </div>{" "}
              </div>
            }
          />
          <Route
            path="/balance"
            element={
              <div className="adj">
                <div className="t1">
                  <Sidebar />
                </div>
                <div className="t-cpm">
                  <Budget />
                </div>{" "}
              </div>
            }
          />
          <Route
            path="/financial-advice"
            element={
              <div className="adj">
                <div className="t1">
                  <Sidebar />
                </div>
                <div className="t-cpm">
                  <Budget />
                </div>{" "}
              </div>
            }
          />
          <Route
            path="/account"
            element={
              <div className="adj">
                <div className="t1">
                  <Sidebar />
                </div>
                <div className="t-cpm">
                  <Budget />
                </div>{" "}
              </div>
            }
          />
          <Route
            path="/settings"
            element={
              <div className="adj">
                <div className="t1">
                  <Sidebar />
                </div>
                <div className="t-cpm">
                  <Budget />
                </div>{" "}
              </div>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
