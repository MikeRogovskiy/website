import React from "react";
import { Link } from "@reach/router";
import "./Navbar.scss";
import classNames from "classnames";
import ReactHtmlParser from "react-html-parser";
import StartBtn from "../StartBtn";

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openMenu: false,
      fixedBar: false,
    };
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
    this.setState((state) => {
      return { openMenu: !state.openMenu };
    });
  };
  closeMenu = () => {
    this.setState({
      openMenu: false,
    });
  };
  getLangText(text) {
    return ReactHtmlParser(this.props.text[text]);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    console.log(this.pureArr);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  hideStartBtn() {
    document.querySelector("#nav-btn").style.display = "none";
  }

  showStartBtn() {
    document.querySelector("#nav-btn").style.display = "flex";
  }

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

    window.onscroll = function() {
      var currentPercentage = calculatePercenteges(document.body);

      function calculatePercenteges(e) {
        let p = e.parentNode;
        currentPercentage =
          ((e.scrollTop || p.scrollTop) / (p.scrollHeight - p.clientHeight)) *
          100;

        return Math.round(currentPercentage);
      }

      if (
        window.location.href.includes("player") === true &&
        window.location.href.includes("player-instruction-youtube") !== true
      ) {
        checkUrlCondition(currentPercentage);
      }

      function checkUrlCondition(percentages) {
        if (
          (window.location.href.includes("player") === true &&
            percentages < 10) ||
          percentages >= 98
        ) {
          document.querySelector("#nav-btn").style.display = "none";
        } else if (
          (window.location.href.includes("player") === true &&
            percentages > 10) ||
          percentages <= 98
        ) {
          document.querySelector("#nav-btn").style.display = "flex";
        }
      }
    };

        // const navBarClass = classNames("Navbar", {
        //     "no-fixed-bar": !this.state.fixedBar,
        //     "fixed-bar": this.state.fixedBar
        // });
        // const menuBtnClass = classNames("menu-btn", {
        //     "menu-btn_active": this.state.openMenu
        // });
        // const menuMainClass = classNames("menu-main", {
        //     "menu-main_active": this.state.openMenu
        // });
        // const langList = this.props.langList.map(l => (
        //     <option value={l.value} key={l.value}>
        //         {l.name}
        //     </option>
        // ));

    window.onscroll = function (){
        var currentPercentage = calculatePercenteges(document.body);

        function calculatePercenteges(e){
            let p = e.parentNode;
                currentPercentage = (e.scrollTop || p.scrollTop) / (p.scrollHeight - p.clientHeight ) * 100;

            return  Math.round(currentPercentage);
        };

        if(window.location.href.includes("player") === true && window.location.href.includes("player-instruction-youtube") !== true){
            checkUrlCondition(currentPercentage)
        };

        function checkUrlCondition(percentages){

            if (window.location.href.includes("player") === true &&  percentages < 10 || percentages >= 98){
                document.querySelector("#nav-btn").style.display = "none";
            } else if (window.location.href.includes("player") === true && percentages > 10 || percentages <= 98){
                document.querySelector("#nav-btn").style.display = "flex";
            };

        };

    };

        return (
            <div>
                {   window.location.href.includes("instruction") || window.location.href.includes("player-animation")
                    || window.location.href.includes("/B") || window.location.href.includes("C")
                    || window.location.href.includes("advertisement") || window.location.href.includes("plans")
                    !== true
                    &&

                    <nav className={navBarClass}>

                        <div className="sticky-bar">
                            <div className="logo">
                                <Link
                                    to="./"
                                    className="logo-light"
                                    onClick={() => {this.closeMenu(); this.showStartBtn()}}
                                >
                                    EasyLang
                                </Link>
                            </div>
                            {
                                this.props.noUseLangSelect || (
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
                                )
                            }
                            <div className="menu-wrapper">
                                <div className="menu-block">
                                    <div className={menuMainClass}>
                                        <div
                                            className="overlay"
                                            onClick={this.closeMenu}
                                        ></div>
                                        <ul className="menu-main-list">
                                            <li>
                                            <span className="menu-logo">
                                                EasyLang
                                            </span>
                                            </li>
                                            <li className="menu-item">
                                                <Link
                                                    to="player/"
                                                    className="menu-nav__link"
                                                    onClick={() => {this.closeMenu(); this.hideStartBtn()}}
                                                >
                                                    {this.props.text.player}
                                                </Link>
                                            </li>
                                            <li className="menu-item">
                                                <Link
                                                    to="extension/"
                                                    className="menu-nav__link"
                                                    onClick={() => {this.closeMenu(); this.showStartBtn()}}
                                                >
                                                    {this.props.text.extension}
                                                </Link>
                                            </li>
                                            <li className="menu-item">
                                                <Link
                                                    to="blog/"
                                                    className="menu-nav__link"
                                                    onClick={() => {this.closeMenu(); this.showStartBtn()}}
                                                >
                                                    {this.props.text.ourBlog}
                                                </Link>
                                            </li>
                                            <li>
                                                <StartBtn
                                                    link={"player/"}
                                                    text={this.props.text.GetStartedButton}
                                                    id={"nav-btn"}
                                                />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div
                                    className={menuBtnClass}
                                    onClick={this.clickMenuButton}
                                >
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    </nav>

                }
            </div>

        );

    };
};
