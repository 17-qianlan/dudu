import React, {Component} from 'react';
import Header from "../Header/index.jsx"//组建下有多个文件夹需要写清楚后缀名
import Banner from "../Banner/index.jsx";
import Category from "../Category/index.jsx";
import Recommend from "../Recommend/index.jsx";
import Conference from "../Conference/index.jsx";
import Goods from "../Goods/index.jsx";
import TableBar from "../Tablebar/index.jsx";


class  Home extends Component {
    render() {
        return (
            //此处一定要有父节点div
                <div className="app">
                    <Header />
                    <Banner />
                    <Category />
                    <Recommend />
                    <Conference/>
                    <Goods />
                    <TableBar/>
                </div>

        );
    }
}

export default Home;