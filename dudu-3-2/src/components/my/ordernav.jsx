import React, {Component} from "react";
import "./index.scss"
import {
    NavLink
} from "react-router-dom";
class OrderNav extends Component {
    render() {
        return (
            <div className={"order_nav"}>
                <ul>
                    <li>
                        <NavLink to ="/">
                            <div className={"icon"}>
                                <img src={require("./img/nav_01.png")} alt="nav"/>
                            </div>
                            <span>代付款</span>
                        </NavLink>  
                    </li>
                    <li>
                        <NavLink to ="/">
                            <div className={"icon"}>
                                <img src={require("./img/nav_02.png")} alt="nav"/>
                            </div>
                            <span>代收货</span>
                        </NavLink>  
                    </li>
                    <li>
                        <NavLink to ="/">
                            <div className={"icon"}>
                                <img src={require("./img/nav_03.png")} alt="nav"/>
                            </div>
                            <span>退换修</span>
                        </NavLink>  
                    </li>
                </ul>
            </div>
        );
    }
}

export default OrderNav;