import { alerts } from "../../data/data"
import { iconsImgs } from "../../utils/images"
import "./Alerts.css";

const Alerts = () => {
  return (
    <div className="subgrid-two-item grid-common grid-c5">
        <div className="grid-c-title">
            <h3 className="grid-c-title-text">Alerts</h3>
            <button className="grid-c-title-icon">
                <img src={ iconsImgs.bell } />
            </button>
        </div>
        <div className="grid-c5-content">
            <div className="grid-items">
                {
                    alerts.map((alerts) => (
                        <div className="grid-item" key = {alerts.id}>
                            <div className="grid-item-l">
                                <div className="icon">
                                    <img src={ iconsImgs.alert } />
                                </div>
                                <p className="text text-silver-v1">{ alerts.title } 
                                <br/><span>Prority: { alerts.priority }</span></p>
                            </div>
                            <div className="grid-item-r">
                                <span className="text-silver-v1"> { alerts.count < 10 ? "0"+alerts.count : alerts.count  }</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Alerts
