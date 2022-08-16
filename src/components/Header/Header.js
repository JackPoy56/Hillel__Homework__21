import { Component } from "react";

class Header extends Component {
    render(){
        return (
            <header className={this.props.className}>{this.props.text}</header>
        );
    }
}

export default Header;