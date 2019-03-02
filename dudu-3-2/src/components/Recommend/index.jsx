import React, {Component} from 'react';
import "./css/index.scss"

class Recommend extends Component {
    render() {
        return (
            <div className={"recommend"}>
                <img src={require("./img/1.png")} alt=""/>
            </div>
        );
    }
}

export default Recommend;