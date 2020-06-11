import React, { Component } from "react";
import "./footerNavBar.scss";
import { Link } from "@reach/router";
import ReactHtmlParser from "react-html-parser";

const generalRenderingCondition = "https://easylang.app/";
const extensionRenderingCondition = "https://easylang.app/extension";
const playerRenderingCondition = "https://easylang.app/player";

export default class FooterNavBar extends Component{

    getLangText(text) {
        return ReactHtmlParser(this.props.text[text]);
    };

    componentDidMount(){
        console.log(window.location.href)
    }

    render(){
        return(
            <div id="footer-nav-bar">
                { window.location.href === generalRenderingCondition &&
                <div className="footer-nav-bar_links" id="landing-footer-nav-bar">

                    <Link to="/">
                        <button>{this.getLangText("ContactUs")}</button>
                    </Link>
                    
                    <Link to="/">
                        <button>{this.getLangText("AboutUs")}</button>
                    </Link>

                    <Link to="/privacy">
                        <button>{this.getLangText("PrivacyPolicy")}</button>
                    </Link>

                </div> }

                { window.location.href === extensionRenderingCondition &&
                <div className="footer-nav-bar_links" id="extension-footer-nav-bar">

                    <Link to="/">
                        <button>{this.getLangText("ContactUs")}</button>
                    </Link>
                    
                    <Link to="/">
                        <button>{this.getLangText("AboutUs")}</button>
                    </Link>

                    <Link to="/privacy">
                        <button>{this.getLangText("PrivacyPolicy")}</button>
                    </Link>

                </div> }

                { window.location.href === playerRenderingCondition &&
                <div className="footer-nav-bar_links" id="player-footer-nav-bar">
                    
                    <Link to="/">
                        <button>{this.getLangText("ContactUs")}</button>
                    </Link>
                    
                    <Link to="/">
                        <button>{this.getLangText("AboutUs")}</button>
                    </Link>

                    <Link to="/privacy">
                        <button>{this.getLangText("PrivacyPolicy")}</button>
                    </Link>

                </div> }

            </div>
        )
    }
}