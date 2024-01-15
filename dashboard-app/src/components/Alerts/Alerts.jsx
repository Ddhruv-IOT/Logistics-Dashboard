// import { alerts } from "../../data/data";
import { iconsImgs } from "../../utils/images";
import { useEffect, useState } from "react";
import { FaBell } from "react-icons/fa";
import { FaBellSlash } from "react-icons/fa";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import "./Alerts.css";

import { useNavigate } from "react-router-dom";

const Alerts = () => {
  const history = useNavigate();

  const handleLinkClick = (event, id, location) => {
    event.preventDefault();
    history(location);
  };

  const [alerts, setAlerts] = useState([]);
  const [alertCount, setAlertCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/alerts");
        const data = await response.json();
        setAlerts(data.alerts);
        setAlertCount(data.alert_count);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="subgrid-two-item grid-common grid-c5">
      <div className="grid-c-title">
        <h3 className="grid-c-title-text">Alerts</h3>
        <button className="grid-c-title-icon">
          {alertCount > 0 ? (
            <FaBell
              style={{
                backgroundColor: "transparent",
                color: "#bdbabb",
                width: "24px",
                height: "26px",
                fontSize: "30px",
              }}
              data-tooltip-id="on-alerts"
              data-tooltip-content="Alerts Available, continue to view"
              data-tooltip-place="top"
              data-effect="solid"
              onClick={(event) => handleLinkClick(event, 4, "/alerts")}
            />
          ) : (
            <FaBellSlash
              style={{
                backgroundColor: "transparent",
                color: "#bdbabb",
                width: "24px",
                height: "26px",
                fontSize: "30px",
              }}
              data-tooltip-id="nan-alerts"
              data-tooltip-content="No Alerts for now"
              data-tooltip-place="top"
              data-effect="solid"
            />
          )}
          <Tooltip id="nan-alerts" place="top" effect="solid"></Tooltip>
          <Tooltip id="on-alerts" place="top" effect="solid"></Tooltip>
        </button>
      </div>
      <div className="grid-c5-content">
        <div className="grid-items">
          {alertCount > 0 ? (
            alerts.map((alerts) =>
              alerts.count > 0 ? (
                <div className="grid-item" key={alerts.id}>
                  <div className="grid-item-l">
                    <div className="icon">
                      <img src={iconsImgs.alert} />
                    </div>
                    <p className="text text-silver-v1">
                      {alerts.title}
                      <br />
                      <span>Prority: {alerts.priority}</span>
                    </p>
                  </div>
                  <div className="grid-item-r">
                    <span className={`text-silver-v1 ${alerts.colorClass}`}>
                      {" "}
                      {alerts.count < 10 ? "0" + alerts.count : alerts.count}
                    </span>
                  </div>
                </div>
              ) : null
            )
          ) : (
            <span className={"text-silver-v1 zero-alert t-center"}>
              No alerts
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Alerts;
