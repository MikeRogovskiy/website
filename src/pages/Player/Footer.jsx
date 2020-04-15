import React from "react";
import ReactHtmlParser from "react-html-parser";

import "./Player.scss";


const Footer = (props) => {

    const getLangText = (text) => {
        return ReactHtmlParser(props.text[text]);
    }

    const macLink = 'http://easylang.app/downloads/EasyLang.Player-Beta_mac.dmg';
    const windowsLink = 'http://easylang.app/downloads/EasyLang.Player-Beta_win.exe';

    return (
        <footer className="getStarted-footer">
            <div className="getStartedPlayer-button">
                <a
                    className="startedPlayer-button top"
                    href={macLink}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span>{getLangText("GetPlayerButtonMac")}</span>
                </a>
                <a
                    className="startedPlayer-button top"
                    href={windowsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span>{getLangText("GetPlayerButtonWindows")}</span>
                </a>
            </div>
        </footer>
    )

};

export default Footer;