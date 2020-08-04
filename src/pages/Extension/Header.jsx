import React from "react";
import ReactHtmlParser from "react-html-parser";
import LoadExtensionBtn from "../../components/LoadExtensionBtn";

import ExtensionLogo from "../../assets/images/ExtensionLogo.png";

import "./Extension.scss";

const Header = (props) => {
  const getLangText = (text) => {
    return ReactHtmlParser(props.text[text]);
  };

  function rememberLangInLocalStorage() {
    let currentUrl = window.location.href;

    if (currentUrl.includes("/en")) {
      localStorage.setItem("lang", "en");
    } else if (currentUrl.includes("/es")) {
      localStorage.setItem("lang", "es");
    } else if (currentUrl.includes("/ru")) {
      localStorage.setItem("lang", "ru");
    } else if (currentUrl.includes("/zh")) {
      localStorage.setItem("lang", "zh");
    } else {
      localStorage.setItem("lang", "/");
    }
  }

  return (
    <header className="getStartedExt-header">
      <div className="wrapper-getStarted">
        <div>
          <img
            src={ExtensionLogo}
            className="getStarted-logo"
            alt="Logo_image"
          ></img>
          <h1 className="getStarted-title">{getLangText("GetStartedText")}</h1>
        </div>
        <div className="getStarted-button">

          <LoadExtensionBtn
            gtag={
              ("event", "Upper Add To Chrome click", {
                event_category: "Landing.Read&Learn"
              })
            }
            analyticsParameter={"Upper Add To Chrome click"}
            text={props.text.GetStartedButton}
          />

        </div>
        <div className="getStarted-subtitle">
          {getLangText("GetStartedBottomText")}
        </div>
      </div>
    </header>
  );
};

export default Header;
