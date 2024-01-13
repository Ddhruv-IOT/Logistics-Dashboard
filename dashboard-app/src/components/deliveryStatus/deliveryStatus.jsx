import { Chart } from "react-google-charts";
import { iconsImgs } from "../../utils/images";
import { useEffect, useState } from "react";
import "./deliveryStatus.css";

const DeliveryStatus = () => {

  const [total, setTotal] = useState(10);
  const [delivered, setDelivered] = useState(1);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/orders');
        const data = await response.json();
        setTotal(data.total);
        setDelivered(data.delivered);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    setTimeout(fetchData, 300);

  }, [])

 
  var deliveredPercent = (delivered / total) * 100;

  const chartData = [
    ["Task", "Status"],
    ["Delivered", deliveredPercent], // Green section
    ["Undelivered", 100 - deliveredPercent], // Red section
  ];

  const chartOptions = {
    pieHole: 0.5,
    colors: ["#00cc00", "#ff0000"], // Green and Red colors
    legend: "none", // Hide the legend
    backgroundColor: "transparent",
    chartArea:{left:20,top:20,width:"80%",height:"80%"}
  };

  return (
    <div className="subgrid-two-item grid-common grid-c7">
      <div className="grid-c-title">
        <h3 className="grid-c-title-text">Delivery Status</h3>
        <button className="grid-c-title-icon">
          <img src={iconsImgs.nuts} />
        </button>
      </div>
      <div className="grid-c7-content">
        <div className="pie-chart">
          <Chart
            chartType="PieChart"
            data={chartData}
            options={chartOptions}
            graph_id="PieChart"
            width="100%"
            height="100%"
            legend_toggle

          />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: "1",
            }}
          >
            <span
              style={{ fontSize: "12px", fontWeight: "bold", color: "White" }}
            >
              {deliveredPercent.toFixed(1)}%
            </span>
          </div>
        </div>
        <ul className="data-list">
          <li className="data-item text-silver-v1">
            <span className="data-item-text">Total Deliveries</span>
            <span className="data-item-value">{total}</span>
          </li>
          <li className="data-item text-silver-v1">
            <span className="data-item-text">Target Reached</span>
            <span className="data-item-value">{delivered}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DeliveryStatus;
