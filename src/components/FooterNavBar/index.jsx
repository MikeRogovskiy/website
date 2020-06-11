import React, { Component } from "react";
import "./footerNavBar.scss";
import { Link } from "@reach/router";
import ReactHtmlParser from "react-html-parser";

const generalRenderingConditionProd = "https://easylang.app/";
const extensionRenderingConditionProd = "https://easylang.app/extension";
const playerRenderingConditionProd = "https://easylang.app/player";


const generalRenderingConditionDev = "https://easylang.app/";
const extensionRenderingConditionDev = "https://easylang.app/extension";
const playerRenderingConditionDev = "https://easylang.app/player";

export default class FooterNavBar extends Component{

    getLangText(text) {
        return ReactHtmlParser(this.props.text[text]);
    };

    render(){
        return(
            <div id="footer-nav-bar">
                { window.location.href === generalRenderingConditionProd &&
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

                { window.location.href === extensionRenderingConditionProd &&
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

                { window.location.href === playerRenderingConditionProd &&
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