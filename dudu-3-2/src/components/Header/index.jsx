import React, {Component} from 'react';
import "./css/index.scss"

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="logo">
                    <img src={require("./img/1.png")} width={"100%"} height={"100%"} alt=""/>
                </div>
                <div className="search">
                    <i className={"iconfont icon-sousuo"}></i>
                    <span>搜索商品名称</span>
                </div>
                <div className={"iconfont icon-wode"}></div>
            </div>
        );
    }
}

export default Header;