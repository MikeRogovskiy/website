import React from "react";
import "./Home.scss";
import "./Home-media.scss";
import { Link } from "@reach/router";
import ReactHtmlParser from "react-html-parser";
import classNames from "classnames";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imgEnjoy from "../../assets/images/home/imgEnjoy.svg";
import puzzle from "../../assets/images/home/puzzle.svg";
import phoneBackground from "../../assets/images/home/phoneBackground.svg";
import phone from "../../assets/images/home/phone.svg";
import chromeStoreSvg from "../../assets/images/home/chromeStore.svg";

import ChatBotSimple from  "../../components/ChatBotSimple";

export default class Home extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      showMobileWow: false
    };
    this.sections = {
      toGetStarted: {
        id: "to-get-started",
        text: "ourApp",
        ref: React.createRef()
      },
      howItWork: {
        id: "how-it-works",
        text: "HowItWork",
        ref: React.createRef()
      },
      source: {
        id: "learning-sources",
        text: "learningSources",
        ref: React.createRef()
      }
    };
    this.offsetSection = 70;
    this.mobileWow = React.createRef();
  }
  calcMobileShow = () => {
    const viewPortHeight = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0
    );
    let mobileRect = this.mobileWow.current.getBoundingClientRect();
    let bottomPhoneImg = mobileRect.top + mobileRect.height + window.scrollY;
    if (
      bottomPhoneImg < window.scrollY + viewPortHeight &&
      !this.state.showMobileWow
    ) {
      this.setState({ showMobileWow: true });
    }
  };
  handleScroll = () => {
    this.calcMobileShow();
  };
  anchorClick = (e, id) => {
    e.preventDefault();
    const curScroll = window.scrollY;
    const top =
      Math.round(this.sections[id].ref.current.getBoundingClientRect().top) +
      curScroll -
      this.offsetSection;
    window.scrollTo({
      top: top,
      behavior: "smooth"
    });
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  };

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  };

  getLangText(text) {
    return ReactHtmlParser(this.props.text[text]);
  };

  render() {
    const mobileClasses = classNames("img-phone-front", {
      show: this.state.showMobileWow
    });

    return (
      <div className="Home">
        <ChatBotSimple />
        <header className="hero">
          <div className="wrapper-hero">
            <div>
              <h1 className="hero-title">{this.getLangText("headerTitle")}</h1>
              <p className="subtitle">{this.getLangText("headerSubtitle")}</p>
            </div>

            {/* <div className="button-started">
              <Link
                className="get-started-button top"
                to="extension/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>{this.getLangText("StartLearning")}</span>
              </Link>
            </div> */}
          </div>

        </header>

        <div className="container">
          <section className="content-home content-enjoyLearning">

            <div className="enjoyIt-wrapper">
              <div className="enjoyIt-heading">
                <h2>{this.getLangText("headPleasure")}</h2>
                <p>{this.getLangText("contentPleasure")}</p>
              </div>
              <div className="imgEnjoy">
                <img src={imgEnjoy} alt="Enjoy learning" />
              </div>
            </div>

          </section>

          <section className="content-home content-context-memory">

            <div className="context-title">
              <h2 className="context-heading">
                {this.getLangText("headMemory")}
              </h2>
              <p>{this.getLangText("contentMemory")}</p>
            </div>
            <div className="img-context-puzzle">
              <img src={puzzle} alt="Context puzzle" />
            </div>

          </section>

          <section
            className="content-home content-ourApp"
            id={this.sections.toGetStarted.id}
            ref={this.sections.toGetStarted.ref}
          >

            <div className="app-download-wrapper">
              <div className="img-phone">
                <img
                  src={phoneBackground}
                  className="img-phone-back"
                  alt="Mobile background"
                />
                <img
                  src={phone}
                  className={mobileClasses}
                  ref={this.mobileWow}
                  alt="EasyLang app"
                />
              </div>
              <div className="content-description">
                <h2>{this.getLangText("headOurApp")}</h2>
                <p>{this.getLangText("contentOurApp")}</p>
                <div className="button-block">
                  <div className="button-group button-group-1">
                    <a
                      className="button-install button-chrome"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://chrome.google.com/webstore/detail/easylangapp-beta/cgelaojeiipaehoiiabkbickcpmpanel"
                    >
                      <span className="button-chrome-wrapper">
                        <img
                          src={chromeStoreSvg}
                          alt="chrome-store"
                          className="icon button-chrome-icon"
                        />
                        {this.getLangText("GetStartedButton")}
                      </span>
                    </a>
                  </div>

                </div>
              </div>
            </div>

          </section>

          <div className="call-to-action">
            <section
              className="content-home content-sources"
              id={this.sections.source.id}
              ref={this.sections.source.ref}
            >

              <div className="sources-wrapper">
                <div className="sources-title">
                  <h2>{this.getLangText("headSource")}</h2>
                  <p>{this.getLangText("contentSource")}</p>
                </div>
                <div className="blog">
                  <p>{this.getLangText("blog")}</p>
                  <Link to="blog" className="get-started-button blog-button">
                    {this.getLangText("Blog")}
                  </Link>
                </div>
                <div className="sources-block">
                  <div className="sources-block_row">
                    <div className="sources-paragraph">
                      <h3>{this.getLangText("news")}</h3>
                      <p>{this.getLangText("newsParagraph")}</p>
                    </div>
                    <div className="sources-paragraph">
                      <h3>{this.getLangText("movie")}</h3>
                      <p>{this.getLangText("movieParagraph")}</p>
                    </div>
                  </div>
                  <div className="sources-block_row">
                    <div className="sources-paragraph">
                      <h3>{this.getLangText("book")}</h3>
                      <p>{this.getLangText("bookParagraph")}</p>
                    </div>
                    <div className="sources-paragraph">
                      <h3>{this.getLangText("video")}</h3>
                      <p>{this.getLangText("videoParagraph")}</p>
                    </div>
                  </div>
                  <div className="sources-block_row">
                    <div className="sources-paragraph">
                      <h3>{this.getLangText("music")}</h3>
                      <p>{this.getLangText("musicParagraph")}</p>
                    </div>
                    <div className="sources-paragraph disabled"></div>
                  </div>
                </div>
              </div>

            </section>
          </div>
        </div>

        <footer className="get-started-footer">
          {/* <div className="button-started bottom">
            <Link
              className="get-started-button bottom"
              to="extension/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>{this.getLangText("StartLearning")}</span>
            </Link>
          </div> */}
          <div>
            <Link to="/privacy">
              <p className="privacy">{this.getLangText("PrivacyPolicy")}</p>
            </Link>
          </div>
        </footer>
      </div>
    );

  };

};
