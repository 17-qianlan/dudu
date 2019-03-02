import React, {Component} from "react";
import "./index.scss"
import Head from "./head"
import Orders from "./order";
import OrderNav from "./ordernav";
import Spacing from "./spacing";
import Go from "../arrow/go";
import {
    NavLink
} from "react-router-dom";

// import Tabbar from "../Tablebar";
class My extends Component {
    render() {
        return (
            <div className="my">
                <Head />
                <Orders/>
                <OrderNav/>
                <Spacing/>
                <ul className={"items"}>
                    <li className={"i_member"}>
                        <NavLink to="/">
                            会员中心
                            <Go/>
                        </NavLink>
                    </li>
                    <li className={"i_wallet"}>
                        <NavLink to="/">
                            我的优惠
                            <Go/>
                        </NavLink>
                    </li>
                </ul>
                <Spacing/>
                <ul className={"items"}>
                    <li className={"i_service"}>
                        <NavLink to="/">
                            服务中心
                            <Go/>
                        </NavLink>
                    </li>
                    <li className={"i_mihome"}>
                        <NavLink to="/">
                            小米之家
                            <Go/>
                        </NavLink>
                    </li>
                </ul>
                <Spacing/>
                <ul className={"items"}>
                    <li className={"i_fcode"}>
                        <NavLink to="/">
                            F 码通道
                            <Go/>
                        </NavLink>
                    </li>
                </ul>
                <Spacing/>
                <ul className={"items"}>
                    <li className={"i_settings"}>
                        <NavLink to="/">
                            <div className="title">
                                设置
                                <Go/>
                            </div>
                        </NavLink>
                    </li>
                </ul>
                <div className={"s_bottom"}></div>

                {/*<Tabbar/>*/}
            </div>
        );
    }
}

export default My;