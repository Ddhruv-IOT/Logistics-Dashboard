import { iconsImgs } from "../../utils/images";
import { useEffect, useState } from "react";
import { ImCheckboxUnchecked } from "react-icons/im";
import { ImCheckboxChecked } from "react-icons/im";
import "./Budget.css";

const Budget = ({ showButton }) => {
  const [budgetData, setBudgetData] = useState([]);
  const [selectedBudgets, setSelectedBudgets] = useState([]);
  const [balance, setBalance] = useState(0);
  const [mbalance, setmBalance] = useState(0);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/money");
        const data = await response.json();
        setBudgetData(data.budgetsData.budgets);
        setBalance(data.savingsData[0].amount_left);
        setmBalance(data.savingsData[0].amount_left);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const [checkedStates, setCheckedStates] = useState({});

  const handleButtonClick = (budgetId) => {
    setCheckedStates((prevStates) => ({
      ...prevStates,
      [budgetId]: !prevStates[budgetId],
    }));
  };

  useEffect(() => {
    const selectedBudgetAmounts = budgetData
      .filter((budget) => checkedStates[budget.id])
      .map((budget) => budget.amount);
  
    const totalSelectedAmount = selectedBudgetAmounts.reduce((acc, amount) => acc + amount, 0);
    
    setBalance(mbalance-totalSelectedAmount);
    setSelectedBudgets(selectedBudgetAmounts);
  }, [checkedStates, budgetData]);

  return (
    <>
      <div className="grid-two-item grid-common grid-c4">
        <div className="grid-c-title">
          <h3 className="grid-c-title-text">Payments</h3>
          {showButton && (
            <button className="grid-c-title-icon">
              <img src={iconsImgs.plus} />
            </button>
          )}
        </div>
        <div className="grid-c-top text-silver-v1">
          <h2 className="lg-value">Cash Left</h2>
          <span className="lg-value">£ {balance.toLocaleString()}</span>
        </div>
        <div className="grid-c4-content bg-jet">
          <div className="grid-items">
            {budgetData.map((budget) => (
              <div className="grid-item" key={budget.id}>
                <div className="grid-item-l">
                  <div className="icon">
                    <button
                      onClick={() => handleButtonClick(budget.id)}
                      className={checkedStates[budget.id] ? "checked" : ""}
                    >
                      {" "}
                      {checkedStates[budget.id] ? (
                        <ImCheckboxChecked />
                      ) : (
                        <ImCheckboxUnchecked />
                      )}{" "}
                    </button>
                  </div>
                  <p className="text text-silver-v1">
                    {budget.title} <span>{budget.type}</span>
                  </p>
                </div>
                <div className="grid-item-r">
                  <span className="text-silver-v1">£ {budget.amount}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Budget;
