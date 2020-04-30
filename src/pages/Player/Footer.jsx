import React from "react";
import ReactHtmlParser from "react-html-parser";

import "./Player.scss";


const Footer = (props) => {

    const getLangText = (text) => {
        return ReactHtmlParser(props.text[text]);
    }

    const macLink = 'https://github.com/easably/platform-player-extension/releases/latest/download/EasyLang.Player-Beta_mac_prod.dmg';
    const windowsLink = 'https://github.com/easably/platform-player-extension/releases/latest/download/EasyLang.Player-Beta_win_prod.exe';

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