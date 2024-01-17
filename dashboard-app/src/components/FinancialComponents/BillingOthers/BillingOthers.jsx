import { iconsImgs } from "../../../utils/images";
import { useEffect, useState } from "react";
import "./BillingOthers.css";
import { useContext } from "react";
import { context1 } from "../../../utils/theContext";

const Billingothers = ({showButton}) => {
  const contextValue = useContext(context1)
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
    <div className="subgrid-two-item grid-common grid-c11">
      <div className="grid-c-title">
        <h3 className="grid-c-title-text">Balance</h3>
        <button className="grid-c-title-icon">
          { showButton && <img src={iconsImgs.plus} />}
        </button>
      </div>
      <div className="grid-c11-content">
        <div className="grid-items">
          {savings.map((saving) => (
            <div className="grid-item" key={saving.id}>
              <div className="grid-item-top">
                <div className="grid-item-top-l">
                  <div className="avatar img-fit-cover">
                    <img src={iconsImgs.wallet} />
                  </div>
                  <p className="text text-silver-v1">Total Amount</p>
                </div>
                <div className="grid-item-top-r">
                  <span className="text-silver-v1">
                    £ {saving.totalAmount.toLocaleString()}
                  </span>
                </div>
              </div>
              <div className="grid-item-bottom">
                <div className="grid-item-badges">
                  <span className="grid-item-badge">
                    Total Avail Balance as on{" "}
                    <span className="text-silver-v1">{saving.date_taken}</span>{" "}
                    is £ {contextValue.toLocaleString()}
                    
                    <span className="text-silver-v1">
                      {/* Amout left %*/}
                       {/* {saving.saving_amount / saving.savings_target * 100}  */}
                    </span>
                  </span>

                  {/* <span className="grid-item-badge"> </span> */}
                </div>
                <div className="grid-item-progress">
                  <div
                    className="grid-item-fill"
                    style={{
                      width:
                        `${(saving.usable_amount / saving.totalAmount) * 100}` + "%",
                    }}
                  ></div>
                  <span className="grid-item-badge"></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Billingothers;
