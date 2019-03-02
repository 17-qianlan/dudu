import React, {Component} from 'react';

import "./css/index.scss";
import {NavLink} from "react-router-dom"
     //注意从主页面跳转到子页面一定要进行数据的申请,一定要请求接口,每一个
    //路由和点击的a标签是一致的吗，点击可以实现跳转。但是请求的接口要注意不是一致的，
    // 要想显示任何一个组建，必须对接口发起请求。然后进行渲染，其次才是该页面其他业务逻辑的实现
class Index extends Component {
    state={
        data:{}
    }
    componentDidMount(){
        const id=this.props.match.params.id
        console.log(id)
        fetch("http://47.100.98.54:9020/api/buygoods/"+id)
            .then(res=>res.json())//注意双引号要将地址的字符串包裹起来
            .then(data=>{
                if(data.status===200){
                    this.setState({
                        data:data.data
                    })
                }
            })

    }
    render() {
        const {data}=this.state
       return(
            <div>
                <div className="shopdedatils">
                    <img src={data.picurl} width="80%" />
                    <h3>{data.des}</h3>
                    <p className="money">
                        <span className="symbol">¥</span>
                        <span className="price">{data.price}</span>
                    </p>
                    <p className="courier">快递：包邮 <span className="fr" ></span></p>
                    <div className="buyNum clearFix">
                        <p className="fl buyfont">购买数量</p>
                            <p className="addNum fr">
                                <a href="javascript:;" className="reduce">-</a>
                            <a href="javascript:;" className="num">0</a>
                            <a href="javascript:;" className="add">+</a>
                        </p>
                    </div>
                    <div className="buy">
                        <a href="javascript:;" className="addCart" >加入购物车</a>
                        <NavLink to="/" className="nowBuy">立即购买</NavLink>
                    </div>
                </div>
            </div>
        )
    }
}

export default Index;