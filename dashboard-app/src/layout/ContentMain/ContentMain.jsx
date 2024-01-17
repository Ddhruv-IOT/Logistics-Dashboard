import "./ContentMain.css";
import Cards from "../../components/perfromanceCards/perfromanceCards";
import Transactions from "../../components/Containers/Containers";
import Report from "../../components/Report/Report";
import Subscriptions from "../../components/Alerts/Alerts";
import DeliveryStatus from "../../components/deliveryStatus/deliveryStatus";
import Budget from "../../components/FinancialComponents/Budget/Budget";
import Earnings from "../../components/FinancialComponents/Earnings/Earnings";
import Financial from "../../components/FinancialComponents/Financial/Financial";

const ContentMain = () => {
  return (
    <div className="main-content-holder">
      <div className="content-grid-one">
        <Transactions />
        <Cards />
        <Report />
      </div>
      <div className="content-grid-two">
        <Budget showButton={true} />
        <div className="grid-two-item">
          <div className="subgrid-two">
            <Subscriptions />
            <Earnings />
          </div>
        </div>

        <div className="grid-two-item">
          <div className="subgrid-two">
            <DeliveryStatus />
            <Financial />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentMain;
