import React, {Component} from 'react';
import "./css/index.scss"
import {
    NavLink
} from "react-router-dom";

class TableBar extends Component {
    render() {
        return(
            <div className={"tableBar"}>

                <ul>
                    <li><NavLink to="/" className={"active"}><i className={"iconfont icon-iconhome01 "}></i><span>首页</span></NavLink>
                    </li>
                    <li><NavLink to="/"><i
                        className={"iconfont icon-fenleigongnengleimu"}></i><span>分类</span></NavLink></li>
                    <li><NavLink to="/shopcart"><i className={"iconfont icon-gouwuche"}></i><span>购物车</span></NavLink></li>
                    <li><NavLink to="/my"><i className={"iconfont icon-wode1"}></i><span>我的</span></NavLink></li>

                </ul>
            </div>
        );
    }
}

export default TableBar;