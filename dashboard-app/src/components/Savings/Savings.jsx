import { savings } from "../../data/data";
import { iconsImgs, personsImgs } from "../../utils/images";
import "./Savings.css";

const Savings = () => {
  return (
    <div className="subgrid-two-item grid-common grid-c6">
        <div className="grid-c-title">
            <h3 className="grid-c-title-text">Earnings</h3>
            <button className="grid-c-title-icon">
                <img src={ iconsImgs.plus } />
            </button>
        </div>
        <div className="grid-c6-content">
            <div className="grid-items">
                {
                    savings.map((saving) => (
                        <div className="grid-item" key = { saving.id }>
                            <div className="grid-item-top">
                                <div className="grid-item-top-l">
                                    <div className="avatar img-fit-cover">
                                        <img src={iconsImgs.wallet } />
                                    </div>
                                    <p className="text text-silver-v1">{ saving.title }</p>
                                </div>
                                <div className="grid-item-top-r">
                                    <span className="text-silver-v1">£ { saving.saving_amount }</span>
                                </div>
                            </div>
                            <div className="grid-item-bottom">
                                <div className="grid-item-badges">
                                    <span className="grid-item-badge">Savings as on {new Date().getDate() + "-" + (new Date().getMonth() + 1) + "-" + new Date().getFullYear() } is £{ saving.amount_left }</span>
                                    {/* <span className="grid-item-badge"> </span> */}
                                </div>
                                <div className="grid-item-progress">
                                    <div className="grid-item-fill"></div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Savings


