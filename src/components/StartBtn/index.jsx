import React from "react";
import "./startBtn.scss";
import {Link} from "@reach/router";

export default class StartBtn extends React.Component {
    render() {
        return (
            <Link
                className="menu-nav__link start-button"
                to="extension-instruction/"
                target="_blank"
                rel="noopener noreferrer"
            >
                {this.props.text.GetStartedButton}
            </Link>
        )
    }

}