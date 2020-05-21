import React from 'react';
import ReactHtmlParser from "react-html-parser";
import StartBtn from "../../components/StartBtn";

import "./Extension.scss";

const Footer = (props) => {

    const getLangText = (text) => {
        return ReactHtmlParser(props.text[text]);
    };

    return (
        <footer className="getStarted-footer">
            <div className="getStarted-button">
                <a
                    className="started-button top"
                    style={{ marginTop: "-20px" }}
                    href="https://chrome.google.com/webstore/detail/easylangapp-beta/cgelaojeiipaehoiiabkbickcpmpanel"
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
