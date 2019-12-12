import React from "react";
import "./Home.scss";
import "./Home-media.scss";
import { Link } from "@reach/router";
import ReactHtmlParser from "react-html-parser";
import classNames from "classnames";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import imgEnjoy from "../../assets/images/home/imgEnjoy.svg";
import puzzle from "../../assets/images/home/puzzle.svg";
import phoneBackground from "../../assets/images/home/phoneBackground.svg";
import phone from "../../assets/images/home/phone.svg";
import slide1 from "../../assets/images/home/slider/slide1.gif";
import slide2 from "../../assets/images/home/slider/slide2.png";
import slide3en from "../../assets/images/home/slider/3.png";
import slide4en from "../../assets/images/home/slider/4.png";
import slide3ru from "../../assets/images/home/slider/3ru.svg";
import slide4ru from "../../assets/images/home/slider/4ru.svg";
import slide3cn from "../../assets/images/home/slider/3cn.svg";
import slide4cn from "../../assets/images/home/slider/4cn.svg";
// import extensionImg from "../../assets/images/home/extensionImg.png";

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
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  getLangText(text) {
    return ReactHtmlParser(this.props.text[text]);
  }
  render() {
    const slickSettings = {
      slides_to_show: 1,
      dots: true,
      pause_on_hover: true,
      autoplay: true,
      infinite: true,
      speed: 900,
      fade: true
    };
    const slideImg = {
      slide3en,
      slide4en,
      slide3ru,
      slide4ru,
      slide3cn,
      slide4cn
    };
    const mobileClasses = classNames("img-phone-front", {
      show: this.state.showMobileWow
    });
    return (
      <div className="Home">
        <header className="hero">
          <div className="wrapper-hero">
            <div>
              <h1 className="hero-title">{this.getLangText("headerTitle")}</h1>
              <p className="subtitle">{this.getLangText("headerSubtitle")}</p>
            </div>

            <div className="button-started">
              <a
                className="get-started-button top"
                href="#toGetStarted"
                onClick={e => {
                  this.anchorClick(e, "toGetStarted");
                }}
              >
                {this.getLangText("buttonStarted")}
              </a>
            </div>
          </div>
        </header>

        <div className="container">
          <section className="content content-enjoyLearning">
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

          <section className="content content-context-memory">
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
            className="content content-ourApp"
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
                      href="https://chrome.google.com/webstore/detail/easylangapp/enhklinppkbachhbnjjpdccklacpidfl"
                    >
                      {this.getLangText("extension")}
                    </a>
                    {/* <a
                                            href="https://support.google.com/chrome_webstore/answer/2664769"
                                            className="button-install button-guide"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            role="button"
                                        >
                                            <i className="fa fa-cog"> </i>{" "}
                                            <span>
                                                {this.getLangText(
                                                    "extensionGuide"
                                                )}
                                            </span>
                                        </a> */}
                  </div>

                  <div className="button-group button-group-2">
                    <a
                      className="button-install button-web"
                      href="http://easy4learn.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Web
                    </a>
                  </div>

                  <div className="button-group button-group-3">
                    <a
                      className="button-install button-android lock"
                      // href="https://github.com/easably/context-tutor/releases/latest/download/EasyLang.apk"
                      // target="_blank"
                      rel="noopener noreferrer"
                    >
                      Android
                    </a>
                    <a
                      className="button-install button-iOS lock"
                      // href="https://testflight.apple.com/join/w0Dyxqef"
                      // target="_blank"
                      rel="noopener noreferrer"
                    >
                      iOS
                    </a>
                    <span className="button-group-comment">
                      {this.getLangText("comingSoon")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            className="content content-howItWorks"
            id={this.sections.howItWork.id}
            ref={this.sections.howItWork.ref}
          >
            <div>
              <h2>{this.getLangText("headHowItWorks")}</h2>
              <div className="slider-wrapper">
                <div className="slider">
                  <Slider className="slides" {...slickSettings}>
                    <div className="slide 1th">
                      <figure className="slick-slide-inner">
                        <img src={slide1} alt="" />
                        <figcaption className="image-carousel-caption">
                          {this.getLangText("sliderCaptionFirst")}
                        </figcaption>
                      </figure>
                    </div>

                    <div className="slide 2th">
                      <figure className="slick-slide-inner">
                        <img src={slide2} alt="" />
                        <figcaption className="image-carousel-caption">
                          {this.getLangText("sliderCaptionSecond")}
                        </figcaption>
                      </figure>
                    </div>
                    <div className="slide 3th">
                      <img
                        src={slideImg[this.getLangText("slideThird")]}
                        alt=""
                      />
                    </div>
                    <div className="slide 4th">
                      <img
                        src={slideImg[this.getLangText("slideFourth")]}
                        alt=""
                      />
                    </div>
                  </Slider>
                </div>
              </div>

              {/* <div className="extension">
                                <div className="extension-img">
                                    {" "}
                                    <img
                                        src={extensionImg}
                                        alt="extension for Chrome"
                                    />
                                </div>
                            </div> */}
            </div>
          </section>

          <div className="call-to-action">
            <section
              className="content content-sources"
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
          <a
            className="get-started-button bottom"
            href="#toGetStarted"
            onClick={e => {
              this.anchorClick(e, "toGetStarted");
            }}
          >
            {this.getLangText("getStarted")}
          </a>
        </footer>
      </div>
    );
  }
}
