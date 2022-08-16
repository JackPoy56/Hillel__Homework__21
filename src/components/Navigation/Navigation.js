import { Component } from "react";

class Navigation extends Component {
    render(){
        return (
            <ul className={this.props.className}>
                <li className="nav__item">
                    Item 1
                </li>
                <li className="nav__item">
                    Item 2
                </li>
                <li className="nav__item">
                    Item 3
                </li>
                <li className="nav__item">
                    Item 4
                </li>
                <li className="nav__item">
                    Item 5
                </li>
            </ul>
        );
    }
}

export default Navigation;