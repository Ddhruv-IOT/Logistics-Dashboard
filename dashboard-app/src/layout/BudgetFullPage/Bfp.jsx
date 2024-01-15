import { iconsImgs } from "../../utils/images";
import { useEffect, useState } from "react";
import "./Bfp.css";
import Budget from "../../components/Budget/Budget";

const BudgetPage = () => {
  return (
    <div className="budegt-side">
      <Budget showButton={false} />
    </div>
  );
};

export default BudgetPage;
