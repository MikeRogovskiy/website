import React, { useEffect, useState } from "react";
import imgEnjoy from "../../../assets/images/home/imgEnjoy.svg";
import "./Main.scss";
import "./mainMedia.scss";
import Slider from "../Slider";
import EasyLangLogo from "../../assets/EasyLang-logo.svg";
import ReactHtmlParser from "react-html-parser";
import { useNavigate } from "@reach/router";
import MobilePopUp from "../../../components/MobilePopUp";

export default function Main(props) {
  const [conditionDesctop, setConditionDesctop] = useState(false);
  const [conditionMobile, setConditionMobile] = useState(false);
  const [popUp, setPopUp] = useState(false);

  useEffect(() => {
    const handleHead = () => {
      if (window.innerWidth <= 1024) {
        setConditionMobile(true);
        setConditionDesctop(false);
      } else {
        setConditionMobile(false);
        setConditionDesctop(true);
      }
    };
    window.addEventListener("load", handleHead);
    window.addEventListener("resize", handleHead);
  });

  const DesctopHead = () => {
    if (conditionDesctop) {
      return (
        <img src={imgEnjoy} alt="Enjoy learning" className="chill-image"></img>
      );
    } else {
      return null;
    }
  };

  const MobileHead = () => {
    if (conditionMobile) {
      return (
        <img src={imgEnjoy} alt="Enjoy learning" className="chill-image"></img>
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
  const navigateTo = useNavigate();

  const updateProps = (value) => {
    setPopUp(value);
  };

  return (
    <div>
      {popUp ? <MobilePopUp updateProps={updateProps} /> : null}
      <section className="relax" id="relax">
        <div className="relax-title">
          <p className="easy-way">{getLangText("Title")}</p>
          <p className="relax-sub">{getLangText("SubTitle")}</p>
          <MobileHead />

          <button
            className="download"
            style={{ borderRadius: "15px" }}
            onClick={() => {
              navigateTo("/player");
              window.gtag("event", `main "Free Start" click`, {
                event_category: "Landing B. Page",
              });
            }}
          >
            {getLangText("FreeStart")}
          </button>
        </div>
        <DesctopHead />
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
              {getLangText("Listen")}


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
              {getLangText("Navigate")}

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
              {getLangText("Play")}

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
              {getLangText("Train")}

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
              {getLangText("Understand")}

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
      <section className="products">
        <div className="products-item">
          <img src={EasyLangLogo} alt="EasyLangLogo" />
          <p className="easy-way">{getLangText("BrowserExt")} </p>
          <p className="relax-sub">{getLangText("BrowserExtDescrip1")}</p>{" "}
          <br />
          <p className="relax-sub" style={{ marginBottom: "48px" }}>
            {getLangText("BrowserExtDescrip2")}
          </p>
          <button
            className="download"
            onClick={() => {
              window.open(
                "https://chrome.google.com/webstore/detail/easylangapp-beta/cgelaojeiipaehoiiabkbickcpmpanel"
              );
              window.gtag("event", "Add Extension' click", {
                event_category: "Landing B. Page",
              });
            }}
          >
            {getLangText("Add")}
          </button>
        </div>
        <div className="products-item">
          <img src={EasyLangLogo} alt="Easy Lang Logo" />
          <p className="easy-way">{getLangText("Player")}</p>{" "}
          <p className="relax-sub">
            <span> {getLangText("PlayerDescrip1")} </span>
            <br /> <span>{getLangText("PlayerDescrip2")}</span>
          </p>
          {conditionDesctop ? (
            <button
              className="download"
              onClick={() => {
                window.open(href);
                window.gtag("event", "Add Player' click", {
                  event_category: "Landing B. Page",
                });
              }}
            >
              {getLangText("Download")}
            </button>
          ) : (
            <button
              className="download"
              onClick={() => {
                setPopUp(true);
                window.gtag("event", "Add Player' click", {
                  event_category: "Landing B. Page",
                });
              }}
            >
              {getLangText("Download")}
            </button>
          )}
        </div>
        <div className="products-item">
          <img src={EasyLangLogo} alt="Easy Lang Logo" />
          <p className="easy-way">{getLangText("Tutor")}</p>
          <p className="relax-sub">
            {" "}
            <span> {getLangText("TutorDescrip1")} </span>
            <br /> <span>{getLangText("TutorDescrip2")}</span>
          </p>
          <button
            className="download"
            onClick={() => {
              window.open("https://easy4learn.com/login");
              window.gtag("event", "Add Tutor' click", {
                event_category: "Landing B. Page",
              });
            }}
          >
            {" "}
            {getLangText("Start")}
          </button>
        </div>
      </section>
    </div>
  );
}
