import React, { Component } from "react";
import "./footerNavBar.scss";
import { Link } from "@reach/router";
import ReactHtmlParser from "react-html-parser";
import { linksObject } from "./linksFolder"

export default class FooterNavBar extends Component{
    constructor(props) {
        super(props);
        this.state = {
            footerNavBarContent:
            <div>
                <Link to="/">
                    <button>{this.getLangText("ContactUs")}</button>
                </Link>

                <Link to="/">
                    <button>{this.getLangText("AboutUs")}</button>
                </Link>

                <Link to="/privacy">
                    <button>{this.getLangText("PrivacyPolicy")}</button>
                </Link>
            </div>
           
        };
    };

    getLangText(text) {
        return ReactHtmlParser(this.props.text[text]);
    };

    render(){

        return(
            <div id="footer-nav-bar">
                { linksObject.generalRenderingConditionProd.find(e => e === window.location.href) &&
                    <div className="footer-nav-bar_links" id="landing-footer-nav-bar">
                        {this.state.footerNavBarContent}
                    </div>
                }

                { linksObject.extensionRenderingConditionProd.find(e => e === window.location.href) &&
                    <div className="footer-nav-bar_links" id="extension-footer-nav-bar">
                        {this.state.footerNavBarContent}
                    </div>
                }

                { linksObject.playerRenderingConditionProd.find(e => e === window.location.href) &&
                    <div className="footer-nav-bar_links" id="player-footer-nav-bar">
                        {this.state.footerNavBarContent}
                    </div>
                }

            </div>
        );
    };
};