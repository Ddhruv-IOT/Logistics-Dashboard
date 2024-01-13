// import { savings } from "../../data/data";
import { iconsImgs, personsImgs } from "../../utils/images";
import { useEffect, useState } from "react";
import "./Savings.css";

const Savings = () => {
  // [{"id":27,"saving_amount":250000,"title":"Today's Earning","date_taken":"23/12/22","amount_left":900000,"total":1000000}]}
  const [savings, setSavings] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/money");
        const data = await response.json();
        setSavings(data.savingsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="subgrid-two-item grid-common grid-c6">
      <div className="grid-c-title">
        <h3 className="grid-c-title-text">Earnings</h3>
        <button className="grid-c-title-icon">
          <img src={iconsImgs.plus} />
        </button>
      </div>
      <div className="grid-c6-content">
        <div className="grid-items">
          {savings.map((saving) => (
            <div className="grid-item" key={saving.id}>
              <div className="grid-item-top">
                <div className="grid-item-top-l">
                  <div className="avatar img-fit-cover">
                    <img src={iconsImgs.wallet} />
                  </div>
                  <p className="text text-silver-v1">{saving.title}</p>
                </div>
                <div className="grid-item-top-r">
                  <span className="text-silver-v1">
                    £ {saving.saving_amount.toLocaleString()}
                  </span>
                </div>
              </div>
              <div className="grid-item-bottom">
                <div className="grid-item-badges">
                  <span className="grid-item-badge">
                    Savings as on{" "}
                    <span className="text-silver-v1">{saving.date_taken}</span>
                    {" "} is {" "} £ {saving.amount_left.toLocaleString()}
                    <span className="text-silver-v1">
                  {/* Amout left % {saving.amount_left / saving.total * 100} */}
                  </span>
                  </span>
                  
                  {/* <span className="grid-item-badge"> </span> */}
                </div>
                <div className="grid-item-progress">
                  <div className="grid-item-fill" style={{width: `${saving.amount_left / saving.total * 100}`+"%"}}></div>
                  <span className="grid-item-badge">
                  
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Savings;
