import React, {Component} from 'react';
import "./css/index.scss"
import {
    NavLink
} from "react-router-dom";
class Goods extends Component {
    state={
        data:[]
    }//此处写数据
//此处写函数
    componentDidMount() {//此处数据请求
        fetch("http://47.100.98.54:9020/api/goods/")
            .then(res=>res.json())
            .then(data=>{
                if(data.status===200) {
                    this.setState({
                        data: data.data
                    })
                }
            })

    }

render() {
        const data=this.state.data

        return (
            <div className={"goods"}>
                <ul>
                    {
                        data.length > 0 && (
                            data.map((item, index) => {
                                return (
                                    <li key={item.id}>
                                        <NavLink to={`/buygoods/${item.shopid}`}>
                                  {/*//跳转到对应id值的产品的组件,即此时的根组建Goods跳转到子组件shop*/}
                                            <div className="goods_shop">
                                                <img src={item.picurl} alt=""/>
                                            </div>
                                            <div className="info">
                                                <p className="title">{item.title}</p>
                                                <p className="des">{item.des}</p>
                                                <p className="price">{item.price}</p>
                                            </div>
                                        </NavLink>
                                    </li>
                                )
                            })
                        )
                    }
                    {/*<li><NavLink to="/">*/}
                        {/*<div className="goods_shop">*/}
                            {/*<img src={require("./img/1.jpg")} alt=""/>*/}
                        {/*</div>*/}
                        {/*<div className="info">*/}
                            {/*<p className="title">小米8 青春版</p>*/}
                            {/*<p className="des">2400万旗舰自拍</p>*/}
                            {/*<p className="price">1299</p>*/}
                        {/*</div>*/}
                        {/*</NavLink>*/}
                    {/*</li>*/}
                    {/*<li><NavLink to="/">*/}
                        {/*<div className="goods_shop">*/}
                            {/*<img src={require("./img/2.jpg")} alt=""/>*/}
                        {/*</div>*/}
                        {/*<div className="info">*/}
                            {/*<p className="title">小米8 屏幕指纹版</p>*/}
                            {/*<p className="des">压感屏幕指纹，手持超级夜景</p>*/}
                            {/*<p className="price">2499</p>*/}
                        {/*</div>*/}
                    {/*</NavLink>*/}
                    {/*</li>*/}
                    {/*<li><NavLink to="/">*/}
                        {/*<div className="goods_shop">*/}
                            {/*<img src={require("./img/3.jpg")} alt=""/>*/}
                        {/*</div>*/}
                        {/*<div className="info">*/}
                            {/*<p className="title">黑鲨游戏手机 Helo</p>*/}
                            {/*<p className="des">双液冷，更能打</p>*/}
                            {/*<p className="price">3199</p>*/}
                        {/*</div>*/}
                    {/*</NavLink>*/}
                    {/*</li>*/}
                    {/*<li><NavLink to="/">*/}
                        {/*<div className="goods_shop">*/}
                            {/*<img src={require("./img/4.jpg")} alt=""/>*/}
                        {/*</div>*/}
                        {/*<div className="info">*/}
                            {/*<p className="title">红米6</p>*/}
                            {/*<p className="des">小屏高性能的双摄手机</p>*/}
                            {/*<p className="price">729</p>*/}
                        {/*</div>*/}
                    {/*</NavLink>*/}
                    {/*</li>*/}
                    {/*<li><NavLink to="/">*/}
                        {/*<div className="goods_shop">*/}
                            {/*<img src={require("./img/5.jpg")} alt=""/>*/}
                        {/*</div>*/}
                        {/*<div className="info">*/}
                            {/*<p className="title">红米6</p>*/}
                            {/*<p className="des">小屏高性能的双摄手机</p>*/}
                            {/*<p className="price">729</p>*/}
                        {/*</div>*/}
                    {/*</NavLink>*/}
                    {/*</li>*/}
                    {/*<li><NavLink to="/">*/}
                        {/*<div className="goods_shop">*/}
                            {/*<img src={require("./img/6.jpg")} alt=""/>*/}
                        {/*</div>*/}
                        {/*<div className="info">*/}
                            {/*<p className="title">红米6</p>*/}
                            {/*<p className="des">小屏高性能的双摄手机</p>*/}
                            {/*<p className="price">729</p>*/}
                        {/*</div>*/}
                    {/*</NavLink>*/}
                    {/*</li>*/}
                </ul>
            </div>
        );
    }
}

export default Goods;