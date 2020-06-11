import React, { Component } from "react";
import "./footerNavBar.scss";
import { Link } from "@reach/router";
import ReactHtmlParser from "react-html-parser";

const generalRenderingConditionProd = ["https://easylang.app/", "https://easylang.app/en", "https://easylang.app/es",
"https://easylang.app/zh", "https://easylang.app/ru"];
const extensionRenderingConditionProd = ["https://easylang.app/extension", "https://easylang.app/en/extension", "https://easylang.app/es/extension",
"https://easylang.app/zh/extension", "https://easylang.app/ru/extension",

"https://easylang.app/extension-instruction", "https://easylang.app/en/extension-instruction", "https://easylang.app/es/extension-instruction",
"https://easylang.app/zh/extension-instruction", "https://easylang.app/ru/extension-instruction",

"https://easylang.app/extension-instruction-static", "https://easylang.app/en/extension-instruction-static", 
"https://easylang.app/es/extension-instruction-static","https://easylang.app/zh/extension-instruction-static", 
"https://easylang.app/ru/extension-instruction-static",

"https://easylang.app/blog", "https://easylang.app/en/blog", "https://easylang.app/es/blog",
"https://easylang.app/zh/blog", "https://easylang.app/ru/blog",

"https://easylang.app/plans", "https://easylang.app/en/plans", "https://easylang.app/es/plans",
"https://easylang.app/zh/plans", "https://easylang.app/ru/plans"
];
const playerRenderingConditionProd = ["https://easylang.app/player", "https://easylang.app/en/player", "https://easylang.app/es/player",
"https://easylang.app/zh/player", "https://easylang.app/ru/player"];


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