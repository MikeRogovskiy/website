import React, { Component } from "react";
import "./footerNavBar.scss";
import "./footerNavBarMedia.scss";
import { Link } from "@reach/router";
import ReactHtmlParser from "react-html-parser";
import Footer from "../Footer";
import facebook from "../../assets/images/footerNavBar/Facebook_footer@2x.svg";
import vkontakte from "../../assets/images/footerNavBar/Vk_footer@2x.svg";
import instagram from "../../assets/images/footerNavBar/Instagram_footer@2x.svg";

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
        <div id="footer-nav-bar_content-b">
          <div id="footer-nav-bar-text">
            <div id="footer-nav-bar-text-links">
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
                to="/about"
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
          </div>
          <p>© 2020 EASYLANG CO. All Rights Reserved.</p>
          </div>
            <div id="footer-nav-bar-logos">
                <a href={this.getLangText("linkInstagram")}><img src={instagram}></img></a>
                <a href={this.getLangText("linkVK")}><img src={vkontakte}></img></a>
                <a href={this.getLangText("linkFB")}><img src={facebook}></img></a>
            </div>
        </div>

      ),
    };
  }

  getLangText(text) {
    return ReactHtmlParser(this.props.text[text]);
  }

  render() {
    return (
      <div className={this.props.page === "landingB"  ? "footer-nav-bar-b" : "footer-nav-bar"}>
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
