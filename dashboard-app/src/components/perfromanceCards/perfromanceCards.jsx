import { iconsImgs } from "../../utils/images";
import React from "react";
import { Chart } from "react-google-charts";
import "./perfromanceCards.css";

const Cards = () => {
  const data1 = [
    ["Label", "Avg. Loading Time"],
    ["Time", 65],
  ];

  const options1 = {
    width: 150,
    height: 150,
    redFrom: 90,
    redTo: 100,
    yellowFrom: 60,
    yellowTo: 90,
    minorTicks: 5,
  };


  const data2 = [
    ["Labe2", "Value"],
    ["Weight", 90],
  ];

  const options2 = {
    width: 150,
    height: 150,
    redFrom: 90,
    redTo: 100,
    yellowFrom: 60,
    yellowTo: 90,
    minorTicks: 5,
  };

  return (
    <div className="grid-one-item grid-common grid-c1">
      <div className="grid-c-title">
        <h3 className="grid-c-title-text">Performance Meter</h3>
        <button className="grid-c-title-icon">
          <img src={iconsImgs.nuts} />
        </button>
      </div>

      <div className="chart">
        <Chart
          className="chart-data"
          chartType="Gauge"
          data={data1}
          options={options1}
          chartEvents={[
            {
              eventName: "animationfinish",
              callback: () => {
                console.log("Animation Finished");
              },
            },
          ]}
        />
        <div className="chart-sep"> </div>
        <Chart
          className="chart-data"
          chartType="Gauge"
          data={data2}
          options={options2}
          chartEvents={[
            {
              eventName: "animationfinish",
              callback: () => {
                console.log("Animation Finished");
              },
            },
          ]}
        />
      </div>
      <div className="infoText">
        <p> Average Loading Time and Weight</p>
     </div>
    </div>
  );
};

export default Cards;
