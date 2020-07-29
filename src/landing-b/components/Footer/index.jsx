import React, { useState } from "react";
import FooterNavBar from "../../../components/FooterNavBar"
import "./Footer.scss";
import "./footerMedia.scss";
import ReactHtmlParser from "react-html-parser";

export default function Footer(props) {
  const [page, setPage] = useState("landingB");

  const getLangText = (text) => {
    return ReactHtmlParser(props.text[text]);
  };

  return (
    <div>
      <footer className="footer">
        <FooterNavBar text={props.text} page={page}/>
      </footer>
    </div>
  );
}
