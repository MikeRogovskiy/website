import React, { useState } from "react";
import ReactHtmlParser from "react-html-parser";
import LoadExtensionBtn from "../../components/LoadExtensionBtn";
import FooterNavBar from "../../components/FooterNavBar";

import "./Extension.scss";

const Footer = (props) => {
  const getLangText = (text) => {
    return ReactHtmlParser(props.text[text]);
  };
  const [page, setPage] = useState("extension")

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
            gtagName={"event"}
            gtagClick={"Lower Add to Chrome click"}
            gtagCategory={"Landing. Read & Learn"}
            // gtag={
            //   ("event", "Lower Add to Chrome click", {
            //   event_category: "Landing. Read & Learn"
            //   })
            // }
            text={props.text.GetStartedButton}
          />

      </div>
      <FooterNavBar text={props.text} page={page}/>
    </footer>
  );
};

export default Footer;
