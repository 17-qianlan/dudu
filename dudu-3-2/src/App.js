import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";
import Home from "./components/Home";
import ShopCart from "./components/shopcart";

import NotFound from "./components/NotFound";
import My from "./components/my";
import Shop from "./components/shop";
import Goods from "./components/Goods";
import TableBar from "./components/Tablebar";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                   <Switch>
                       {/*//有了Switch 不需要加div了*/}
                       {/*<Home />   path是有双引号包裹的，但是component后面的组件是没有双引号包裹的*/}
                       <Route exact path={"/"} component={Home}></Route>
                       {/*<Route  path={"/shopbuy/:shopid"} component={Shop}></Route>*/}
                       <Route  path={"/buygoods/:id"} component={Shop}></Route>
                       <Route  path={"/shopcart"} component={ShopCart}></Route>
                       <Route  path={"/my"} component={My}></Route>
                       <Route  component={NotFound}></Route>
                   </Switch>
                    <TableBar />
                {/*//每个组件都需要底部导航,所以加在跟组件这里*/}
                {/*但是一个Router只能有一个子组建就是div,需要包裹住Switch*/}
                </div>
            </Router>

    )
        
    }
}

export default App;