import React, { Component } from "react";
import "./footerNavBar.scss";
import "./footerNavBarMedia.scss";
import { Link } from "@reach/router";
import ReactHtmlParser from "react-html-parser";
import Footer from "../Footer";
import facebook from "../../assets/images/footerNavBar/Facebook_footer@2x.svg";
import vkontakte from "../../assets/images/footerNavBar/Vk_footer@2x.svg";
import instagram from "../../assets/images/footerNavBar/Instagram_footer@2x.svg";
import classNames from "classnames";
//"landing-footer-nav-bar"
export default class FooterNavBar extends Component {
  constructor(props) {
    super(props);
  }
  links = {
    linkInstagram: "https://www.instagram.com/easylang.app_ru/",
    linkFB: "https://www.facebook.com/EasyLangGames/",
    linkVK: "https://vk.com/public196837780",
  };

  classes = {
    footerNavBar: classNames(
      {
        "footer-nav-bar-b": this.props.page === "landingB",
      },
      {
        "footer-nav-bar": this.props.page !== "landingB",
      }
    ),
  };

  footerNavBarContent = (
    <div
      className="footer-nav-bar_links"
      id={
        this.props.page === "landing"
          ? "landing-footer-nav-bar"
          : "extension-footer-nav-bar"
      }
    >
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
    </div>
  );
  footerNavBarContentB = (
    <div className="footer-nav-bar_links" id="landing-b-footer-nav-bar">
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
          <a
            href={this.links.linkInstagram}
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src={instagram}></img>
          </a>
          <a href={this.links.linkVK} target="_blank" rel="noreferrer noopener">
            <img src={vkontakte}></img>
          </a>
          <a href={this.links.linkFB} target="_blank" rel="noreferrer noopener">
            <img src={facebook}></img>
          </a>
        </div>
      </div>
    </div>
  );

  getLangText(text) {
    return ReactHtmlParser(this.props.text[text]);
  }

  render() {
    if (this.props.page === "landingB") {
      return (
        <div className={this.classes.footerNavBar}>
          {this.footerNavBarContentB}
        </div>
      );
    } else {
      return (
        <div className={this.classes.footerNavBar}>
          {this.footerNavBarContent}
        </div>
      );
    }
  }
}
