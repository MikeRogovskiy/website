import React, { Component } from "react";
import "./footerNavBar.scss";
import { Link } from "@reach/router";
import ReactHtmlParser from "react-html-parser";

const generalRenderingConditionProd = ["http://easylang.app/", "http://easylang.app/en", "http://easylang.app/es",
"http://easylang.app/zh", "http://easylang.app/ru"];
const extensionRenderingConditionProd = ["http://easylang.app/extension", "http://easylang.app/en/extension", "http://easylang.app/es/extension",
"http://easylang.app/zh/extension", "http://easylang.app/ru/extension"];
const playerRenderingConditionProd = ["http://easylang.app/player", "http://easylang.app/en/player", "http://easylang.app/es/player",
"http://easylang.app/zh/player", "http://easylang.app/ru/player"];


const generalRenderingConditionDev = ["http://localhost:3000/", "http://localhost:3000/en", "http://localhost:3000/es",
"http://localhost:3000/zh", "http://localhost:3000/ru"];
const extensionRenderingConditionDev = ["http://localhost:3000/extension", "http://localhost:3000/en/extension", "http://localhost:3000/es/extension",
"http://localhost:3000/zh/extension", "http://localhost:3000/ru/extension"];
const playerRenderingConditionDev = ["http://localhost:3000/player", "http://localhost:3000/en/player", "http://localhost:3000/es/player",
"http://localhost:3000/zh/player", "http://localhost:3000/ru/player"];

export default class FooterNavBar extends Component{

    getLangText(text) {
        return ReactHtmlParser(this.props.text[text]);
    };

    render(){

        return(
            <div id="footer-nav-bar">
                { generalRenderingConditionProd.find(e => e === window.location.href) &&
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

                { extensionRenderingConditionProd.find(e => e === window.location.href) &&
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

                { playerRenderingConditionProd.find(e => e === window.location.href) &&
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