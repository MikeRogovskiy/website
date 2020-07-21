import React from "react";
import "./Footer.scss";
import "./footerMedia.scss";
import ReactHtmlParser from "react-html-parser";

export default function Footer(props) {
  const getLangText = (text) => {
    return ReactHtmlParser(props.text[text]);
  };
  return (
    <div>
      <footer className="footer">
        <a href="#" className="link">
          {getLangText("ContactUs")}
        </a>
        <a href="#" className="link">
          {getLangText("AboutUs")}
        </a>
        <a href="/privacy" className="link">
          {getLangText("PrivacyPolicy")}
        </a>
      </footer>
    </div>
  );
}
