import React from "react";
import ReactHtmlParser from "react-html-parser";
// import StartBtn from "../../components/StartBtn";

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
        <a
          className="started-button top"
          style={{ marginTop: "-20px" }}
          href="https://chrome.google.com/webstore/detail/easylangapp-beta/cgelaojeiipaehoiiabkbickcpmpanel"
          onClick={() => {
            rememberLangInLocalStorage();
            window.gtag("event", "Lower Add To Chrome click", {
              event_category: "Landing. Read & Learn",
            });
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>{getLangText("GetStartedButton")}</span>
        </a>
        {/* <StartBtn  link={"/player"} id={"extension-btn"} text={getLangText("GetStartedButton")} /> */}
      </div>
    </footer>
  );
};

export default Footer;
