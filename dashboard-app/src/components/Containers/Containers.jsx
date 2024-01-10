import "./Containers.css";
import React from "react";
import "react-tooltip/dist/react-tooltip.css";
import { transactions } from "../../data/data";
import { iconsImgs } from "../../utils/images";
import { Tooltip } from "react-tooltip";

const Transactions = () => {
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

      <div className="grid-content">
        <div className="grid-items">
          {transactions.map((transaction) => (
            <div className="grid-item" key={transaction.id}>
              <div className="grid-item-l">
                <div className="avatar img-fit-cover">
                  <img src={transaction.image} alt="" />
                </div>
                <p className="text">
                  {transaction.name} <span>{transaction.date}</span>
                </p>
              </div>
              <div className="grid-item-r">
                <span className="text-scarlet">£ {transaction.amount}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Transactions;
