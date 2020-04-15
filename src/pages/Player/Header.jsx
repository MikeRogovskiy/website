import React from "react";
import ReactHtmlParser from "react-html-parser";

import "./Player.scss";

import PlayerLogo from "../../assets/images/PlayerLogo.png";

const Header = (props) => {

    const getLangText = (text) => {
        return ReactHtmlParser(props.text[text]);
    }
    
    const macLink = 'http://easylang.app/downloads/EasyLang.Player-Beta_mac.dmg';
    const windowsLink = 'http://easylang.app/downloads/EasyLang.Player-Beta_win.exe';
    

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
                <div>
                    <p className="getStarted-subtitle">{getLangText("GetStartedBottomText")}</p>
                </div>
            </div>
        </header>
    )

};

export default Header;