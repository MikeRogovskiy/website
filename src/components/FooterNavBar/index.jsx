import React, { Component } from "react";
import "./footerNavBar.scss";
import "./footerNavBarMedia.scss";
import { Link } from "@reach/router";
import ReactHtmlParser from "react-html-parser";
import Footer from "../Footer";
import { linksObject } from "./linksFolder";

export default class FooterNavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      footerNavBarContent: (
        <div id="footer-nav-bar_content">
          <Link to="/">
            <button
              onClick={() =>
                window.gtag("event", "Contact Us click", {
                  event_category: "Landing. Footer",
                })
              }
            >
              {this.getLangText("ContactUs")}
            </button>
          </Link>

          <Link to="/">
            <button
              onClick={() =>
                window.gtag("event", "About Us click", {
                  event_category: "Landing. Footer",
                })
              }
            >
              {this.getLangText("AboutUs")}
            </button>
          </Link>

          <Link to="/privacy">
            <button
              onClick={() =>
                window.gtag("event", "Privacy Policy click", {
                  event_category: "Landing. Footer",
                })
              }
            >
              {this.getLangText("PrivacyPolicy")}
            </button>
          </Link>

          <Footer />

        </div>
      ),
    };
  }

  getLangText(text) {
    return ReactHtmlParser(this.props.text[text]);
  }

  render() {
    return (
      <div id="footer-nav-bar">
        {linksObject.generalRenderingCondition.find(
          (e) => e === window.location.pathname
        ) && (
          <div className="footer-nav-bar_links" id="landing-footer-nav-bar">
            {this.state.footerNavBarContent}
          </div>
        )}

        {linksObject.extensionRenderingCondition.find(
          (e) => e === window.location.pathname
        ) && (
          <div className="footer-nav-bar_links" id="extension-footer-nav-bar">
            {this.state.footerNavBarContent}
          </div>
        )}

        {linksObject.playerRenderingCondition.find(
          (e) => e === window.location.pathname
        ) && (
          <div className="footer-nav-bar_links" id="player-footer-nav-bar">
            {this.state.footerNavBarContent}
          </div>
        )}
      </div>
    );
  }
}
