import React, { useState } from "react";
import imgEnjoy from "../../../assets/images/home/imgEnjoy.svg";
import "./Main.scss";
import "./mainMedia.scss";
import Slider from "../Slider";
// import EasyLangLogo from "../../assets/EasyLang-logo.svg";
import EasyLangLogo from "../../assets/EasyLang-products.svg";
import ReactHtmlParser from "react-html-parser";
import MobilePopUp from "../../../components/MobilePopUp";
import { Link } from "@reach/router";


export default function Main(props) {
  const isMobile = props.isMobile;
  const [playerPopup, setPlayerPopup] = useState(false);
  const [extensionPopup, setExtensionPopup] = useState(false);

  const DesktopHead = () => {
    if (!isMobile) {
      return (
        <img src={imgEnjoy} alt="Enjoy learning" className="chill-image"/>
      );
    } else {
      return null;
    }
  };

  const MobileHead = () => {
    if (isMobile) {
      return (
        <img src={imgEnjoy} alt="Enjoy learning" className="chill-image"/>
      );
    } else {
      return null;
    }
  };

  const href =
    "https://easylang.app/downloads/eLang_Player_-_Learn_English_" +
    (navigator.platform.indexOf("Win") > -1 ? "win_prod.exe" : "mac_prod.dmg");

  const getLangText = (text) => {
    return ReactHtmlParser(props.text[text]);
  };

  const setPlayerPopupVisibility = (value) => {
    setPlayerPopup(value);
  };

  const setExtensionPopupVisibility = (value) => {
    setExtensionPopup(value);
  };

  return (
    <div>
      {playerPopup || extensionPopup ? <MobilePopUp
          setPopupVisibility={playerPopup ? setPlayerPopupVisibility : setExtensionPopupVisibility}
          text={props.mobilePopupText} product={playerPopup ? "Player" : "Extension"}/> : null}
      <section className="relax" id="relax">
        <div className="relax-title">
          <p className="easy-way">{getLangText("Title")}</p>
          <p className="relax-sub">{getLangText("SubTitle")}</p>
          <MobileHead />

          {!isMobile ? (
              <button
                  className="download"
                  onClick={() => {
                    window.open(href);
                    window.gtag("event", "Main 'Free Start' Click", {
                      event_category: "Landing B. Page",
                    });
                  }}
              >
              <span className="download__child">
                {getLangText("FreeStart")}
              </span>
              </button>
          ) : (
              <button
                  className="download"
                  onClick={() => {
                    setPlayerPopup(true);
                    window.gtag("event", "Main 'Free Start' Click", {
                      event_category: "Landing B. Page",
                    });
                  }}
              >
                {getLangText("FreeStart")}
              </button>
          )}
        </div>
        <DesktopHead />
      </section>
      <section className="options">
        <div className="options-row-first">
          <div
            className="options-item"
            onClick={() => {
              window.gtag("event", `Listen' click`, {
                event_category: "Landing B. Page",
              });
            }}
          >
            <p className="easy-way">
              {getLangText("Listen")} &#128066;
            </p>
            <span className="relax-sub">{getLangText("ListenDescrip")}</span>
          </div>
          <div
            className="options-item"
            onClick={() => {
              window.gtag("event", `Navigate' click`, {
                event_category: "Landing B. Page",
              });
            }}
          >
            <p className="easy-way">
              {getLangText("Navigate")} &#128073;
            </p>
            <span className="relax-sub">{getLangText("NavigateDescrip")}</span>
          </div>
          <div
            className="options-item"
            onClick={() => {
              window.gtag("event", `Play' click`, {
                event_category: "Landing B. Page",
              });
            }}
          >
            <p className="easy-way">
              {getLangText("Play")} &#127955;
            </p>
            <span className="relax-sub">{getLangText("PlayDescrip")}</span>
          </div>
        </div>
        <div className="options-row-second">
          <div
            className="options-item"
            style={{
              marginRight: "10px",
            }}
            onClick={() => {
              window.gtag("event", `Train' click`, {
                event_category: "Landing B. Page",
              });
            }}
          >
            <p className="easy-way">
              {getLangText("Train")} &#128170;
            </p>
            <span className="relax-sub">{getLangText("TrainDescrip")}</span>
          </div>
          <div
            className="options-item"
            style={{
              marginLeft: "10px",
            }}
            onClick={() => {
              window.gtag("event", `Understand' click`, {
                event_category: "Landing B. Page",
              });
            }}
          >
            <p className="easy-way">
              {getLangText("Understand")} &#129504;
            </p>
            <span className="relax-sub">
              {getLangText("UnderstandDescrip")}
            </span>
          </div>
        </div>
      </section>

      <section className="slider">
        <Slider text={props.text} />
      </section>

      {/* <section className="blog">
        <Link
          to="/blog"
          onClick={() => {
            window.gtag("event", "Blog button click", {
              event_category: "Landing B. Page",
            });
          }}
        >
          <button className="blog-btn" >
            <span className="download__child">
              {getLangText("Blog")}
            </span>
          </button>
        </Link>
      </section> */}

      <section className="products">
        <div className="products-item">
          <img src={EasyLangLogo} alt="EasyLangLogo" />
          <p className="products-item__title">{getLangText("BrowserExt")} </p>
          <p className="products-item__subs">
            <p className="products-item__subtitle"> {getLangText("BrowserExtDescrip1")} </p>
            <p className="products-item__subtitle"> {getLangText("BrowserExtDescrip2")} </p>
          </p>
          {!isMobile ? (
              <button
              className="download fullWidth"
                onClick={() => {
                  window.open(
                    "https://chrome.google.com/webstore/detail/easylangapp-beta/cgelaojeiipaehoiiabkbickcpmpanel"
                  );
                  window.gtag("event", "Add Extension' click", {
                    event_category: "Landing B. Page",
                  });
                }}
              >
                <span className="download__child">
                  {getLangText("Add")}
                </span>
              </button>
              ) : (
              <button
                className="download fullWidth"
                onClick={() => {
                  setExtensionPopup(true);
                  window.gtag("event", "Add Extension' click", {
                    event_category: "Landing B. Page",
                  });
                }}
              >
                <span className="download__child">
                  {getLangText("Add")}
                </span>
              </button>
          )}
        </div>
        <div className="products-item">
          <img src={EasyLangLogo} alt="Easy Lang Logo" />
          <p className="products-item__title">{getLangText("Player")}</p>{" "}
          <p className="products-item__subs">
            <p className="products-item__subtitle"> {getLangText("PlayerDescrip1")} </p>
            <p className="products-item__subtitle"> {getLangText("PlayerDescrip2")} </p>
          </p>
          {!isMobile ? (
            <button
              className="download fullWidth"
              onClick={() => {
                window.open(href);
                window.gtag("event", "Add Player' click", {
                  event_category: "Landing B. Page",
                });
              }}
            >
              <span className="download__child">
              {getLangText("Download")}
              </span>
            </button>
          ) : (
            <button
                className="download fullWidth"
              onClick={() => {
                setPlayerPopup(true);
                window.gtag("event", "Add Player' click", {
                  event_category: "Landing B. Page",
                });
              }}
            >
              <span className="download__child">
                {getLangText("Download")}
              </span>
            </button>
          )}
        </div>
        {/* <div className="products-item">
          <img src={EasyLangLogo} alt="Easy Lang Logo" />
          <p className="products-item__title">{getLangText("Tutor")}</p>
          <p className="products-item__subs">
            <p className="products-item__subtitle"> {getLangText("TutorDescrip1")} </p>
            <p className="products-item__subtitle"> {getLangText("TutorDescrip2")} </p>
          </p>
          <button
            className="download fullWidth"
            onClick={() => {
              window.open("https://easy4learn.com/login");
              window.gtag("event", "Add Tutor' click", {
                event_category: "Landing B. Page",
              });
            }}
          >
            <span className="download__child">
              {getLangText("Start")}
            </span>
          </button>
        </div> */}
      </section>
    </div>
  );
}
