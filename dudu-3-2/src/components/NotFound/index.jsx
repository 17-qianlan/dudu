import React, {Component} from 'react';
import "./css/index.scss"
class NotFound extends Component {
    render() {
        return (
            <div className={"notfound"}>
                <p>
                    错误！！！404 页面不存在
                </p>
            </div>
        );
    }
}

export default NotFound;