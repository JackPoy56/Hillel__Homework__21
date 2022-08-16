import { Component } from "react";

class MainContent extends Component {
    render(){
        return (
            <div className={this.props.className}>{this.props.text}</div>
        );
    }
}

export default MainContent;