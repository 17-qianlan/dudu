import React, {Component} from 'react';
import "./css/index.scss"
// import Swiper from "swiper"
import Swiper from "swiper/dist/js/swiper.min";
import "swiper/dist/css/swiper.min.css";
import {
    NavLink
} from "react-router-dom";
class Banner extends Component {
    state={
        data:[]
    }
    autoplay(){
        var mySwiper = new Swiper('.swiper-container', {
            autoplay: true,//可选选项，自动滑动
            loop: true,
            // pagination: {
            //     el: '.swiper-pagination',
            // },
        })
    }
    componentDidMount() {

       fetch("http://47.100.98.54:9020/api/banner/")
           .then(res=>res.json())//注意json后面有口号,这是用fentch方法请求数据
           .then(data=>{
               //状态是this.setState,函数是this.函数名
               if(data.status===200){
                   this.setState({
                       data:data.data
                   })
               }

           this.autoplay()
           console.log(data)
       })

    }

    render() {
        return (
            <div className={"swiper-container banner"}>
                <ul className={"swiper-wrapper"}>
                    {
                        this.state.data.length>0&&(
                            this.state.data.map((item,index)=>{
                                return(
                                    <li key={index} className={"swiper-slide"}>
                                        <NavLink to={"/"}><img src={item.picurl} alt={item.alt}/>
                                        </NavLink>
                                    </li>
                                )
                            })
                        )
                    }
                    {/*<li className={"swiper-slide"}><NavLink to="/"><img src={require("./img/1.jpg")} alt=""/></NavLink>*/}
                    {/*</li>*/}
                    {/*<li className={"swiper-slide"}><NavLink to="/"><img src={require("./img/2.jpg")} alt=""/></NavLink>*/}
                    {/*</li>*/}
                    {/*<li className={"swiper-slide"}><NavLink to="/"><img src={require("./img/1.jpg")} alt=""/></NavLink>*/}
                    {/*</li>*/}
                    {/*<li className={"swiper-slide"}><NavLink to="/"><img src={require("./img/2.jpg")} alt=""/></NavLink>*/}
                    {/*</li>*/}
                    {/*<li className={"swiper-slide"}><NavLink to="/"><img src={require("./img/1.jpg")} alt=""/></NavLink>*/}
                    {/*</li>*/}
                </ul>
            </div>
        );
    }
}

export default Banner;