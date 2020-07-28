import React from "react";
import ReactHtmlParser from "react-html-parser";
import LoadExtensionBtn from "../../components/LoadExtensionBtn";

import "./Extension.scss";

const Footer = (props) => {
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
    <footer className="getStarted-footer">
      <div className="getStarted-button">
          <LoadExtensionBtn
            analyticsParameter={"Lower Add To Chrome click"}
            text={props.text.GetStartedButton}
          />
      </div>
    </footer>
  );
};

export default Footer;
