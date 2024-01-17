import React, { useEffect, useState } from "react";
import "./Bfp.css";
import Budget from "../../components/FinancialComponents/Budget/Budget";
import Earnings from "../../components/FinancialComponents/Earnings/Earnings";
import BillingOthers from "../../components/FinancialComponents/BillingOthers/BillingOthers"
import BillingOthers1 from "../../components/FinancialComponents/BillingOthers/Bliinote1"
import { context1 } from "../../utils/theContext";

const BudgetPage = () => {
  const [data, setData] = useState();

  return (
    <>
      <context1.Provider value={data}>
        <div className="main-bfp">
          <div className="grd">
            <div className="savings-bfp">
              <Earnings />
            </div>
            <div>
              <Budget showCheckBox={true} setData={setData} />
            </div>
          </div>

          <div className="side-cl">
            <div className="savings-bfp">
              <BillingOthers />
            </div>
            <div className="savings-bfp">
              <BillingOthers1 data={data} />
            </div>
          </div>
        </div>
      </context1.Provider>
    </>
  );
};

export default BudgetPage;
