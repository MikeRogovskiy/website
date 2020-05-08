import React from 'react';
import ReactHtmlParser from "react-html-parser";
import StartBtn from "../../components/StartBtn";

import ExtensionLogo from "../../assets/images/ExtensionLogo.png";

import "./Extension.scss";

const Header = (props) => {

    const getLangText = (text) => {
        return ReactHtmlParser(props.text[text]);
    };

    return (
        <header className="getStartedExt-header">
            <div className="wrapper-getStarted">
              <div>
                <img src={ExtensionLogo} className="getStarted-logo" alt="Logo_image"></img>
                <h1 className="getStarted-title">{getLangText("GetStartedText")}</h1>
              </div>
              <div className="getStarted-button">
                {/* <a
                  className="started-button top"
                  href="https://chrome.google.com/webstore/detail/easylangapp-beta/cgelaojeiipaehoiiabkbickcpmpanel"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>{getLangText("GetStartedButton")}</span>
                </a> */}
                 <StartBtn link={"/extension-instruction"} id={"extension-btn"} text={getLangText("GetStartedButton")} />
              </div>
              <div>
                <p className="getStarted-subtitle">{getLangText("GetStartedBottomText")}</p>
              </div>
            </div>
      </header>
    );

};

export default Header;
