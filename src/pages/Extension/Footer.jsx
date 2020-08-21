import React, { useState } from "react";
import ReactHtmlParser from "react-html-parser";
import LoadExtensionBtn from "../../components/Buttons/LoadExtensionBtn";
import FooterNavBar from "../../components/FooterNavBar";

import "./Extension.scss";
import MobilePopUp from "../../components/MobilePopUp";

const Footer = (props) => {
  const [extensionPopup, setExtensionPopup] = useState(false);
  const [page, setPage] = useState("extension");

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
    <footer className="getStarted-footer">

      {extensionPopup ? <MobilePopUp setPopupVisibility={setPopupVisibility}
                                     text={props.mobilePopupText} product={"Extension"}/> : null}

      <div className="getStarted-button">
          <LoadExtensionBtn
            gtagName={"event"}
            gtagClick={"Lower Add to Chrome click"}
            gtagCategory={"Landing. Read & Learn"}
            // gtag={
            //   ("event", "Lower Add to Chrome click", {
            //   event_category: "Landing. Read & Learn"
            //   })
            // }
            text={props.text.GetStartedButton}
            setPopupVisibility={setPopupVisibility}
            isMobile={props.isMobile}
          />

      </div>
      <FooterNavBar text={props.text} page={page}/>
    </footer>
  );
};

export default Footer;
