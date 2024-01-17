import React, { useEffect, useState, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { ImCheckboxUnchecked, ImCheckboxChecked } from "react-icons/im";
import { Tooltip } from "react-tooltip";
import Swal from "sweetalert2";
import { iconsImgs } from "../../../utils/images";
import { context1 } from "../../../utils/theContext";
import "./Budget.css";

const Budget = ({ showButton, showCheckBox, setData }) => {
  const history = useNavigate();

  const [budgetData, setBudgetData] = useState([]);
  const [selectedBudgets, setSelectedBudgets] = useState([]);
  const [balance, setBalance] = useState(0);
  const [mbalance, setmBalance] = useState(0);
  const [checkedStates, setCheckedStates] = useState({});
  const [finalSelection, setFinalSelection] = useState(0);
  const isAnyCheckboxSelected = Object.values(checkedStates).some((isChecked) => isChecked);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/money");
      const { budgetsData, savingsData } = await response.json();
      setBudgetData(budgetsData.budgets);
      setBalance(savingsData[0].usable_amount);
      setmBalance(savingsData[0].usable_amount);
      setData(savingsData[0].usable_amount);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleLinkClick = (event, location) => {
    event.preventDefault();
    history(location);
  };

  const handleButtonClick = (budgetId) => {
    setCheckedStates((prevStates) => ({
      ...prevStates,
      [budgetId]: !prevStates[budgetId],
    }));
  };

  useEffect(() => {
    const selectedBudgetAmounts = budgetData
      .filter((budget) => checkedStates[budget.id])
      .map(({ amount, title }) => ({ amount, title }));

    const totalSelectedAmount = selectedBudgetAmounts.reduce((acc, budget) => acc + budget.amount, 0);
    setFinalSelection(totalSelectedAmount);

    setBalance(mbalance - totalSelectedAmount);
    setSelectedBudgets(selectedBudgetAmounts);
  }, [checkedStates, budgetData]);

  const showAlert = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'The payment can\'t be refunded.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#8B4513', // Choco color
      confirmButtonText: 'Continue',
      cancelButtonText: 'Stop'
    }).then((result) => {
      if (result.isConfirmed) {
        const paymentData = {
          balance,
          billPaidFor: selectedBudgets.map(({ title }) => title).join(', '), // Join selected budget titles !!! BUG
          amountPaid: finalSelection,
        };

        // Send data to the server
        fetch("http://localhost:3000/pay", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(paymentData),
        })
          .then((response) => response.json())
          .then((data) => {
            // Remove selected budgets from the client-side
            const updatedBudgets = budgetData.filter((budget) => !checkedStates[budget.id]);
            setBudgetData(updatedBudgets);
            setCheckedStates({});
            setSelectedBudgets([]);
            fetchData();
          })
          .catch((error) => {
            console.error('Error processing payment:', error);
          });
      }
    });
  };

  return (
    <div className="grid-two-item grid-common grid-c4">
      <context1.Provider value={mbalance}>
        <div className="grid-c-title">
          <h3 className="grid-c-title-text">Due Payments</h3>
          {showButton && budgetData.length > 0 && (
            <>
              <button className="grid-c-title-icon">
                <img
                  src={iconsImgs.plus}
                  data-tooltip-id="payments"
                  data-tooltip-content="Make Payments Now"
                  data-tooltip-place="top"
                  data-effect="solid"
                  onClick={(event) => handleLinkClick(event, "/budget")}
                />
              </button>
              <Tooltip id="payments" place="top" effect="solid"></Tooltip>
            </>
          )}
        </div>
        <div className="grid-c-top text-silver-v1">
          <h2 className="lg-value">Cash Left</h2>
          <span className="lg-value">£ {balance.toLocaleString()}</span>
        </div>
        <div className="grid-c4-content bg-jet">
          <div className="grid-items">
            {budgetData.length > 0 ? (
              budgetData.map((budget) => (
                <div className="grid-item" key={budget.id}>
                  <div className="grid-item-l">
                    <div className="icon">
                      {showCheckBox && (
                        <button
                          onClick={() => handleButtonClick(budget.id)}
                          className={checkedStates[budget.id] ? "checked" : ""}
                        >
                          {checkedStates[budget.id] ? (
                            <ImCheckboxChecked />
                          ) : (
                            <ImCheckboxUnchecked />
                          )}
                        </button>
                      )}
                    </div>
                    <p className="text text-silver-v1">
                      {budget.title} <span>{budget.type}</span>
                    </p>
                  </div>
                  <div className="grid-item-r">
                    <span className="text-silver-v1">£ {budget.amount}</span>
                  </div>
                </div>
              ))
            ) : (
              <div className="grid-c4-content bg-jet">
                <span className="zero-alert t-center">
                  All Paid
                </span>
              </div>
            )}
            {isAnyCheckboxSelected && (
              <button onClick={showAlert} className="payment-btn">
                Click to Pay
              </button>
            )}
          </div>
        </div>
      </context1.Provider>
    </div>
  );
};

export default Budget;
