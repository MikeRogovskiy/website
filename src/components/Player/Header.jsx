import React from "react";
import ReactHtmlParser from "react-html-parser";

import "./Player.scss";

import PlayerLogo from "../../assets/images/PlayerLogo.png";

const Header = (props) => {

    const getLangText = (text) => {
        return ReactHtmlParser(props.text[text]);
    }

    return (
        <header className="getStartedPlayer-header">
            <div className="wrapper-getStarted">
                <div>
                    <img src={PlayerLogo} className="getStarted-logo" alt="Logo_image"></img>
                    <h1 className="getStarted-title">{getLangText("GetStartedPlayerText")}</h1>
                </div>
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
                <div>
                    <p className="getStarted-subtitle">{getLangText("GetStartedBottomText")}</p>
                </div>
            </div>
        </header>
    )

};

export default Header;