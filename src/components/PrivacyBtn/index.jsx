import React, { Component } from "react";
import "./privacyBtn.scss";
import { Link } from "@reach/router";
import ReactHtmlParser from "react-html-parser";

export default class PrivacyBtn extends Component{

    getLangText(text) {
        return ReactHtmlParser(this.props.text[text]);
    };

    render(){
        return(
            <div id="privacy-btn-container">
                { window.location.href.includes("analytics-redirect") || window.location.href.includes("player-instruction-youtube")
                || window.location.href.includes("player-animation") || window.location.href.includes("extension-advertisement") ||
                window.location.href.includes("extension-inner-instruction") !== true &&
                    <Link to="./privacy">
                        <button>{this.getLangText("PrivacyPolicy")}</button>
                    </Link>
                }
            </div>
        )
    }
}