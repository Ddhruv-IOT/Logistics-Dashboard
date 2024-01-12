import { iconsImgs } from "../../utils/images";
import { reportData } from "../../data/data";
import { useEffect, useState } from "react";

import "./Report.css";

const Report = () => {
    const [data, setData] = useState(reportData);

    
  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/reportData');
        const data = await response.json();
        setData(data);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    // setTimeout(() => { setLoadingTime(0), setAvgWeight(0) }, 1);
    // setTimeout(() => { setLoadingTime(100), setAvgWeight(100) }, 700);
    setTimeout(fetchData, 300);

  }, [])


  return (
    <div className="grid-one-item grid-common grid-c3">
        <div className="grid-c-title">
            <h3 className="grid-c-title-text">Profits</h3>
            <button className="grid-c-title-icon">
                <img src={ iconsImgs.download } />
            </button>
        </div>
        <div className="grid-c3-content">
            <div className="grid-chart">
                <div className="chart-vert-value">
                    <span>100</span>
                    <span>75</span>
                    <span>50</span>
                    <span>25</span>
                    <span>0</span>
                </div>
                {
                    data.map((report) => (
                        <div className="grid-chart-bar" key={report.id}>
                            <div className="bar-wrapper">
                                <div className="bar-item1" style={{ height: `${report.value1 !== null ? report.value1+"%" : ""}` }}></div>
                                <div className="bar-item2" style={{ height: `${report.value2 !== null ? report.value2+"%" : ""}` }}></div>
                            </div>
                            <span className="grid-hortz-value">{report.month}</span>
                        </div>
                    ))
                }
                
            </div>
        </div>
        {/* <div className="infoText">Profits / Month</div>  */}
        {/* infoText from perfromanceCards.css file */}

    </div>
  )
}

export default Report
