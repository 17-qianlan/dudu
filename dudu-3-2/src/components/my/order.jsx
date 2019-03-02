import React, {Component} from "react";
import "./index.scss"
import {
    NavLink
} from "react-router-dom";
import Go from "../arrow/go";
class Orders extends Component {
    render() {
        return (
            <div className={"orders"}>
                <p className={"title"}>
                    我的订单
                </p>
                <p className={"all_orders"}>
                    <NavLink to="/">
                        全部订单
                        <Go/>
                    </NavLink>

                </p>
            </div>
        );
    }
}

export default Orders;