import React, { Component } from "react";
import "./footerNavBar.scss";
import "./footerNavBarMedia.scss";
import { Link } from "@reach/router";
import ReactHtmlParser from "react-html-parser";
import Footer from "../Footer";

export default class FooterNavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      footerNavBarContent: (
        <div id="footer-nav-bar_content">
          <Link
            to="/contact"
            onClick={() => {
              window.gtag("event", "Contact Us click", {
                event_category: "Landing. Footer",
              });
            }}
          >
            <button>{this.getLangText("ContactUs")}</button>
          </Link>

          <Link
            to="/about"
            onClick={() => {
              window.gtag("event", "About Us click", {
                event_category: "Landing. Footer",
              });
            }}
          >
            <button>{this.getLangText("AboutUs")}</button>
          </Link>

          <Link
            to="/privacy"
            onClick={() => {
              window.gtag("event", "Privacy Policy click", {
                event_category: "Landing. Footer",
              });
            }}
          >
            <button>{this.getLangText("PrivacyPolicy")}</button>
          </Link>
          <Footer />
        </div>
      ),

      footerNavBarContentB: (
        <div id="footer-nav-bar_content">
          <Link
            to="/contact"
            onClick={() => {
              window.gtag("event", "Contact Us click", {
                event_category: "Landing B. Footer",
              });
            }}
          >
            <button>{this.getLangText("ContactUs")}</button>
          </Link>

          <Link
            to="/"
            onClick={() => {
              window.gtag("event", "About Us click", {
                event_category: "Landing B. Footer",
              });
            }}
          >
            <button>{this.getLangText("AboutUs")}</button>
          </Link>

          <Link
            to="/privacy"
            onClick={() => {
              window.gtag("event", "Privacy Policy click", {
                event_category: "Landing B. Footer",
              });
            }}
          >
            <button>{this.getLangText("PrivacyPolicy")}</button>
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
        {this.props.page === "landing" ? (
          <div className="footer-nav-bar_links" id="landing-footer-nav-bar">
            {this.state.footerNavBarContent}
          </div>
        ) : this.props.page === "landingB" ? (
          <div className="footer-nav-bar_links" id="landing-b-footer-nav-bar">
            {this.state.footerNavBarContentB}
          </div>
        ) : this.props.page === "blog" || "extension" || "contact" ? (
          <div className="footer-nav-bar_links" id="extension-footer-nav-bar">
            {this.state.footerNavBarContent}
          </div>
        ) : this.props.page === "player" ? (
          <div className="footer-nav-bar_links" id="player-footer-nav-bar">
            {this.state.footerNavBarContent}
          </div>
        ) : null}
      </div>
    );
  }
}
