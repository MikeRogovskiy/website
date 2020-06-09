import React from "react";
import "./startBtn.scss";
import { Link } from "@reach/router";
import ReactHtmlParser from "react-html-parser";

export default class StartBtn extends React.Component {
    
    getLangText(text) {
        return ReactHtmlParser(this.props.text[text]);
    };

    render() {
        return (
            <div id="list-for-start-btn">
                { window.location.href.includes("player") !== true &&
                    <Link
                    to={this.props.link}
                    rel="noopener noreferrer"
                    id={this.props.id}
                    >
                        {this.props.text}
                    </Link>
                }
            </div>
        );

    };

};