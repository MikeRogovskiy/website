import React, { useState } from "react";
import ReactHtmlParser from "react-html-parser";
import LoadExtensionBtn from "../../components/Buttons/LoadExtensionBtn";

import ExtensionLogo from "../../assets/images/ExtensionLogo.png";

import "./Extension.scss";
import MobilePopUp from "../../components/MobilePopUp";

const Header = (props) => {
  const [extensionPopup, setExtensionPopup] = useState(false);

  const getLangText = (text) => {
    return ReactHtmlParser(props.text[text]);
  };

  const setPopupVisibility = (value) => {
    setExtensionPopup(value)
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

      {extensionPopup ? <MobilePopUp setPopupVisibility={setPopupVisibility}
                        text={props.mobilePopupText} product={"Extension"}/> : null}

      <div className="wrapper-getStarted">
        <div>
          <img
            src={ExtensionLogo}
            className="getStarted-logo"
            alt="Logo_image"
          />
          <h1 className="getStarted-title">{getLangText("GetStartedText")}</h1>
        </div>
        <div className="getStarted-button">

          <LoadExtensionBtn
            gtagName={"event"}
            gtagClick={"Upper Add To Chrome click"}
            gtagCategory={"Landing. Read & Learn"}
            // gtag={
            //   ("event", "Upper Add To Chrome click", {
            //     event_category: "Landing. Read & Learn"
            //   })
            // }
            text={props.text.GetStartedButton}
            setPopupVisibility={setPopupVisibility}
            isMobile={props.isMobile}
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
