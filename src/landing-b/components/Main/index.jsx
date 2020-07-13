import React, { useEffect } from "react";
import imgEnjoy from "../../../assets/images/home/imgEnjoy.svg";
import "./Main.scss";
import Slider from "../Slider";
import EasyLangLogo from "../../assets/EasyLang-logo.svg";
import ReactHtmlParser from "react-html-parser";
import { useNavigate } from "@reach/router";

export default function Main(props) {
  let href =
    navigator.platform.indexOf("Win") > -1
      ? "http://easylang.app/downloads/EasyLang.Player-Beta_win_prod.exe"
      : "http://easylang.app/downloads/EasyLang.Player-Beta_mac_prod.dmg";

  const getLangText = (text) => {
    return ReactHtmlParser(props.text[text]);
  };
  const navigate = useNavigate();
  return (
    <div>
      <section className="relax" id="relax">
        <div className="relax-title">
          <p className="easy-way">{getLangText("Title")}</p>

          <p className="relax-sub">{getLangText("SubTitle")}</p>

          <button
            className="download"
            style={{ width: "50%", borderRadius: "15px", marginTop: "5%" }}
            onClick={() => navigate("/player")}
          >
            {getLangText("FreeStart")}
          </button>
        </div>
        <img src={imgEnjoy} alt="Enjoy learning" className="chill-image" />
      </section>
      <section className="options">
        <div className="options-row-first">
          <div className="options-item">
            <p className="easy-way">
              {getLangText("Listen")}
              <i
                className="em em-ear"
                aria-role="presentation"
                aria-label="EAR"
              ></i>
            </p>
            <span className="relax-sub">{getLangText("ListenDescrip")}</span>
          </div>
          <div className="options-item">
            <p className="easy-way">
              {getLangText("Navigate")}
              <i
                className="em em-point_right"
                aria-role="presentation"
                aria-label="WHITE RIGHT POINTING BACKHAND INDEX"
              ></i>
            </p>
            <span className="relax-sub">{getLangText("NavigateDescrip")}</span>
          </div>
          <div className="options-item">
            <p className="easy-way">
              {getLangText("Play")}
              <i
                className="em em-table_tennis_paddle_and_ball"
                aria-role="presentation"
                aria-label="TABLE TENNIS PADDLE AND BALL"
              ></i>
            </p>
            <span className="relax-sub">{getLangText("PlayDescrip")}</span>
          </div>
        </div>
        <div className="options-row-second">
          <div className="options-item" style={{ marginRight: "10px" }}>
            <p className="easy-way">
              {getLangText("Train")}
              <i
                className="em em-muscle"
                aria-role="presentation"
                aria-label="FLEXED BICEPS"
              ></i>
            </p>
            <span className="relax-sub">{getLangText("TrainDescrip")}</span>
          </div>
          <div className="options-item" style={{ marginLeft: "10px" }}>
            <p className="easy-way">
              {getLangText("Understand")}
              <i
                className="em em-brain"
                aria-role="presentation"
                aria-label="BRAIN"
              ></i>
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
          <img src={EasyLangLogo} alt="" />
          <p className="easy-way">{getLangText("BrowserExt")} </p>
          <p className="relax-sub">{getLangText("BrowserExtDescrip1")}</p>{" "}
          <br />
          <p className="relax-sub" style={{ marginBottom: "48px" }}>
            {getLangText("BrowserExtDescrip2")}
          </p>
          <button className="download">
            <a
              href="https://chrome.google.com/webstore/detail/easylangapp-beta/cgelaojeiipaehoiiabkbickcpmpanel"
              target="_blank"
            >
              {getLangText("Add")}
            </a>
          </button>
        </div>
        <div className="products-item">
          <img src={EasyLangLogo} alt="" />
          <p className="easy-way">{getLangText("Player")}</p>{" "}
          <p className="relax-sub">
            <span> {getLangText("PlayerDescrip1")} </span>
            <br /> <span>{getLangText("PlayerDescrip2")}</span>
          </p>
          <button className="download">
            <a href={href}>{getLangText("Download")}</a>
          </button>
        </div>
        <div className="products-item">
          <img src={EasyLangLogo} alt="" />
          <p className="easy-way">{getLangText("Tutor")}</p>
          <p className="relax-sub">
            {" "}
            <span> {getLangText("TutorDescrip1")} </span>
            <br /> <span>{getLangText("TutorDescrip2")}</span>
          </p>
          <button className="download">
            {" "}
            <a href="https://easy4learn.com/login" target="_blank">
              {getLangText("Start")}
            </a>
          </button>
        </div>
      </section>
    </div>
  );
}
