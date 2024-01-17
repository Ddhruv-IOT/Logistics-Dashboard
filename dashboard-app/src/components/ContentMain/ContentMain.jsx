import "./ContentMain.css";
import Cards from "../perfromanceCards/perfromanceCards";
import Transactions from "../Containers/Containers";
import Report from "../Report/Report";
import Subscriptions from "../Alerts/Alerts";
import DeliveryStatus from "../deliveryStatus/deliveryStatus";
// import Loans from

import Budget from "../FinancialComponents/Budget/Budget";
import Balance from "../FinancialComponents/Balance/Balance";
import Financial from "../FinancialComponents/Financial/Financial";


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
                <Balance />
              </div>
            </div>

            <div className="grid-two-item">
              <div className="subgrid-two">
              <DeliveryStatus/>
                <Financial />
              </div>
            </div>
        </div>
    </div>
  )
}

export default ContentMain