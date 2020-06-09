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
                <Link to="/privacy">
                    <button>{this.getLangText("PrivacyPolicy")}</button>
                </Link>
            </div>
        )
    }
}