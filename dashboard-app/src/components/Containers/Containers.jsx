import "./Containers.css";
import React from "react";
import "react-tooltip/dist/react-tooltip.css";
import { transactions } from "../../data/data";
import { iconsImgs } from "../../utils/images";
import { Tooltip } from "react-tooltip";
import { useEffect, useState } from "react";

const Containers = () => {
  const [ContainerData, setContainerData] = useState([]);
  const [importantCount, setImportantCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/containers");
        const data = await response.json();
        setContainerData(data.containers);
        setImportantCount(data.impCount);
        console.log(data.impCount);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    // setTimeout(fetchData, 300);
    fetchData();
  }, []);

  let paddingRequ = importantCount > 3 ? true : false;

  return (
    <div className="grid-one-item grid-common grid-c2">
      <div className="grid-c-title">
        <h3 className="grid-c-title-text">Important Containers </h3>
        <button className="grid-c-title-icon">
          <img
            src={iconsImgs.plus}
            data-tooltip-id="my-tooltip"
            data-tooltip-content="View All"
            data-tooltip-place="top"
            data-effect="solid"
            style={{ cursor: "pointer" }}
          />
        </button>
        <Tooltip id="my-tooltip" place="top" effect="solid"></Tooltip>
      </div>

      <div
        className={`grid-content c-h-restrict ${paddingRequ ? "scrl-pdn" : ""}`}
      >
        <div className="grid-items">
          {ContainerData.map((container) =>
            container.priority === "high" ? (
              <div className="grid-item" key={container.id}>
                <div className="grid-item-l">
                  <div className="avatar img-fit-cover">
                    <img src={container.image} alt="" />
                  </div>
                  <p className="text">
                    {container.name} <span>{container.date}</span>
                  </p>
                </div>
                <div className="grid-item-r">
                  <span className={container.colorClass}>
                    {container.status}
                  </span>
                </div>
              </div>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
};

export default Containers;
