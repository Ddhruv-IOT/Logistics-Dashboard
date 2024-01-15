import "./ContentMain.css";
import Cards from "../perfromanceCards/perfromanceCards";
import Transactions from "../Containers/Containers";
import Report from "../Report/Report";
import Budget from "../Budget/Budget";
import Subscriptions from "../Alerts/Alerts";
import Savings from "../Savings/Savings";
import Loans from "../deliveryStatus/deliveryStatus";
import Financial from "../Financial/Financial";
// import 

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
                <Savings />
              </div>
            </div>

            <div className="grid-two-item">
              <div className="subgrid-two">
                <Loans />
                <Financial />
              </div>
            </div>
        </div>
    </div>
  )
}

export default ContentMain