import React, {Component} from 'react';
import "./css/index.scss"
import {
    NavLink
} from "react-router-dom";

class Conference extends Component {

    state = {
        data: {}//第一步骤，后端返回的是对象,数据默认空对象,
    }
    //第二步骤,dom结构加载完成之后请求资源,请求到资源之后进行渲染
    componentDidMount() {
        fetch("http://47.100.98.54:9020/api/conference")
            .then(res => res.json())
            .then(data => {
                if (data.status === 200) {
                    this.setState({
                        data: data.data
                    })
                }
            })
    }

    render() {
        const data = this.state.data// 函数是this.函数名字
        return (
            <div className="conference">
                {/*//第三步骤进行渲染 return*/}
                {
                    data.shopid && (//注意使用时候一定要注意这个data,在前面一定要写好,用变量接收
                        <NavLink to="/" index={data.shopid}>
                            <img src={data.picurl} alt={data.alt} width={"100%"} height={"100%"}/>
                        </NavLink>
                    )
                }
                {/*<NavLink to="/">*/}
                {/*<img src={require("./img/1.jpg")} alt="" width={"100%" }height={"100%"}/>*/}
                {/*</NavLink>*/}
            </div>

        );
    }
}

export default Conference;
//后端返回的是数组,就判断数组的长度,然后进行遍历return进行渲染渲染.
// 后端返回的数据是对象,就判断对象师傅具有某个属性,然后进行渲染,注意不需要return返回，同时不需要进行遍历