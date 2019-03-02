import React, {Component} from 'react';
import "./css/index.scss"
import {
    NavLink
} from "react-router-dom";

class Category extends Component {
    state = {
        data: []//原始撞他默认空数组
    }

    componentDidMount() {
        fetch("http://47.100.98.54:9020/api/category")
            .then(res=>res.json())
            .then(data=>{
                if(data.status===200){
                    this.setState(
                        {data:data.data
                    } )
                }
            })
    }


    render() {
        const data = this.state.data
        return (
            <div className={"category"}>
                <ul>
                    {
                        //注意没有if,是规定,不是判断
                        data.length>0&&(
                           data.map((item,index)=>{
                              return(
                                  <li key={item.id}><NavLink to="/">
                                      <img src={item.picurl} alt={item.alt} width={"100%"} height={"100%"}/>
                                  </NavLink>
                                  </li>
                              )
                            })
                        )
                    }
                    {/*<li><NavLink to="/"><img src={require("./img/1.jpg")} alt="" width={"100%"} height={"100%"}/></NavLink> </li>*/}
                    {/*<li><NavLink to="/"><img src={require("./img/2.jpg")} alt="" width={"100%"} height={"100%"}/></NavLink> </li>*/}
                    {/*<li><NavLink to="/"><img src={require("./img/3.jpg")} alt="" width={"100%"} height={"100%"}/></NavLink> </li>*/}
                    {/*<li><NavLink to="/"><img src={require("./img/4.jpg")} alt="" width={"100%"} height={"100%"}/></NavLink> </li>*/}
                    {/*<li><NavLink to="/"><img src={require("./img/5.jpg")} alt="" width={"100%"} height={"100%"}/></NavLink> </li>*/}
                </ul>
            </div>
        );
    }
}

export default Category;