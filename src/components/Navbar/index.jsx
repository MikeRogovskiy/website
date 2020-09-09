import React from "react";
import { Link } from "@reach/router";
import "./Navbar.scss";
import "./NavbarMedia.scss";
import classNames from "classnames";
import ReactHtmlParser from "react-html-parser";
import StartBtn from "../Buttons/StartBtn";

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openMenu: false,
      fixedBar: false,
      showMainMenu: true,
      startBtn: false,
      blogBtn: false,
      landingGTAGCondition: window.location.href.includes("landing"),
    };
    //localStorage.setItem("lang", 'en');
  }

  getLangText(text) {
    return ReactHtmlParser(this.props.text[text]);
  }

  changeLocale = (e) => {
    this.props.handleLanguage(e.target.value);
    localStorage.setItem("lang", e.target.value);
    window.gtag("event", "Language choose", {
      event_category: "Landing.Navigation bar",
      event_label: e.target.value,
    });
  };

  clickMenuButton = () => {
    this.setState({
      openMenu: !this.state.openMenu,
      showMainMenu: !this.state.showMainMenu,
    });
  };

  closeMenu = () => {
    this.setState({
      openMenu: false,
      showMainMenu: false,
    });
  };

  startBtnSubscripting = () => {
    window.addEventListener("scroll", this.handleScroll);
    if (
      window.location.href.includes("player") ||
      window.location.href.includes("blog")
    ) {
      this.setState({
        startBtn: false,
      });
    } else {
      this.setState({
        startBtn: true,
      });
    }
  };

  sideMenuSubscripting = () => {
    if (window.innerWidth > 1024) {
      this.setState({
        showMainMenu: true,
      });
    } else if (window.innerWidth <= 1024) {
      this.setState({
        showMainMenu: false,
      });
    }
  };

  handleScroll = (e) => {
    if (window.pageYOffset > 50 && !this.state.fixedBar) {
      this.setState({
        fixedBar: true,
      });
    } else if (window.pageYOffset <= 50 && this.state.fixedBar) {
      this.setState({
        fixedBar: false,
      });
    }
  };

  handleStartBtn = () => {
    let currentPercentageScroll = 0;

    function calculatePercenteges(percentages) {
      let p = percentages.parentNode;
      currentPercentageScroll =
        ((percentages.scrollTop || p.scrollTop) /
          (p.scrollHeight - p.clientHeight)) *
        100;
      return Math.round(currentPercentageScroll);
    }
    calculatePercenteges(document.body);

    if (currentPercentageScroll > 12 && currentPercentageScroll < 95) {
      this.setState({
        startBtn: true,
      });
    } else {
      this.setState({
        startBtn: false,
      });
    }
  };

  handleBlogBtn = () => {
    if (window.location.href.includes("blog")) {
      this.setState({
        blogBtn: false,
      });
    }
  };

  googleAnalytics(event, click, category) {
    window.gtag(event, click, {
      event_category: category,
    });
  }

  componentDidMount() {
    this.startBtnSubscripting();
    this.sideMenuSubscripting();
  }

  componentWillUnmount() {
    this.startBtnSubscripting();
  }

  render() {
    const navBarClass = classNames("Navbar", {
      "no-fixed-bar": !this.state.fixedBar,
      "fixed-bar": this.state.fixedBar,
    });
    const menuBtnClass = classNames("menu-btn", {
      "menu-btn_active": this.state.openMenu,
    });
    const menuMainClass = classNames("menu-main", {
      "menu-main_active": this.state.openMenu,
    });

    const langList = this.props.langList.map((l) => (
      <option value={l.value} key={l.value}>
        {l.name}
      </option>
    ));

    window.onscroll = window.location.href.includes("player")
      ? this.handleStartBtn
      : null;
    window.onresize = this.sideMenuSubscripting;

    if (this.props.location.pathname === "/farewell") {
      return <></>;
    }

    return (
      <div>
        {window.location.href.includes("instruction") ||
          window.location.href.includes("player-animation") ||
          window.location.href.includes("/B") ||
          window.location.href.includes("/C") ||
          window.location.href.includes("advertisement") ||
          ((
            <nav className={navBarClass}>
              <div className="sticky-bar">
                <div className="logo">
                  <Link
                    to={"/landing"}
                    className="logo-light"
                    onClick={() => {
                      !this.state.landingGTAGCondition
                        ? this.googleAnalytics(
                            "event",
                            "Logo click",
                            "Landing. Navigation bar"
                          )
                        : this.googleAnalytics(
                            "event",
                            "Logo click",
                            "Landing B. Navigation Bar"
                          );
                      this.closeMenu();
                      this.showStartBtn();
                    }}
                  >
                    EasyLang
                  </Link>
                </div>
                {this.props.noUseLangSelect || (
                  <div className="lang">
                    <form>
                      <select
                        name="changeLang"
                        id="getLang"
                        value={this.props.curLang}
                        onChange={this.changeLocale}
                      >
                        {langList}
                      </select>
                    </form>
                  </div>
                )}
                <div className="menu-wrapper">
                  <div className="menu-block">
                    <div className={menuMainClass}>
                      {this.state.showMainMenu && (
                        <div
                          className="overlay"
                          onClick={() => {
                            this.closeMenu();
                          }}
                        />
                      )}

                      {this.state.showMainMenu && (
                        <ul className="menu-main-list">
                          <li>
                            <span className="menu-logo">EasyLang</span>
                          </li>
                          <li className="menu-item">
                            <Link
                              to="player/"
                              className="menu-nav__link"
                              onClick={() => {
                                !this.state.landingGTAGCondition
                                  ? this.googleAnalytics(
                                      "event",
                                      "Watch & Learn click",
                                      "Landing. Navigation bar"
                                    )
                                  : this.googleAnalytics(
                                      "event",
                                      "Watch & Learn click",
                                      "Landing B. Navigation Bar"
                                    );
                                this.closeMenu();
                                this.showStartBtn();
                              }}
                            >
                              {this.props.text.player}
                            </Link>
                          </li>
                          <li className="menu-item">
                            <Link
                              to="extension/"
                              className="menu-nav__link"
                              onClick={() => {
                                !this.state.landingGTAGCondition
                                  ? this.googleAnalytics(
                                      "event",
                                      "Read & Learn click",
                                      "Landing. Navigation bar"
                                    )
                                  : this.googleAnalytics(
                                      "event",
                                      "Read & Learn click",
                                      "Landing B. Navigation Bar"
                                    );
                                this.closeMenu();
                                this.showStartBtn();
                              }}
                            >
                              {this.props.text.extension}
                            </Link>
                          </li>
                          <li className="menu-item">
                            {this.state.blogBtn ? (
                              <Link
                                to="blog/"
                                className="menu-nav__link"
                                onClick={() => {
                                  window.gtag("event", "Blog click", {
                                    event_category: "Landing. Navigation bar",
                                  });
                                  this.closeMenu();
                                  this.showStartBtn();
                                }}
                              >
                                {this.props.text.ourBlog}
                              </Link>
                            ) : null}
                          </li>
                          <li>
                            {this.state.startBtn ? (
                              <StartBtn
                                link={"player/"}
                                text={this.props.text.GetStartedButton}
                                id={"nav-btn"}
                                gtagName={"event"}
                                gtagClick={
                                  this.state.landingGTAGCondition
                                    ? `Upper 'Free start' Click`
                                    : "Free start click"
                                }
                                gtagCategory={
                                  this.state.landingGTAGCondition
                                    ? "Landing B. Navigation Bar"
                                    : "Landing. Navigation bar"
                                }
                              />
                            ) : null}
                          </li>
                        </ul>
                      )}
                    </div>
                  </div>
                  <div className={menuBtnClass} onClick={this.clickMenuButton}>
                    <span></span>
                  </div>
                </div>
              </div>
            </nav>
          ))}
      </div>
    );
  }
}
