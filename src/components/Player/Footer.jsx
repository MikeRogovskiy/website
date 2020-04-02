import React from "react";
import ReactHtmlParser from "react-html-parser";

import "./Player.scss";


const Footer = (props) => {

    const getLangText = (text) => {
        return ReactHtmlParser(props.text[text]);
    }

    return (
        <footer className="getStarted-footer">
            <div className="getStartedPlayer-button">
                <a
                    className="startedPlayer-button top"
                    href="https://github.com/easably/platform-player-extension/releases/latest/download/EasyLang.Player-Beta-mac.dmg"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span>{getLangText("GetPlayerButtonMac")}</span>
                </a>
                <a
                    className="startedPlayer-button top"
                    href="https://github.com/easably/platform-player-extension/releases/latest/download/EasyLang.Player-Beta-win.exe"
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