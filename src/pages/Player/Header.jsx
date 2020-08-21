import React, { useState } from "react";
import ReactHtmlParser from "react-html-parser";
import MobilePopUp from "../../components/MobilePopUp";
import DownloadPlayerBtn from "../../components/Buttons/DownloadPlayerBtn";

import "./Player.scss";

import PlayerLogo from "../../assets/images/PlayerLogo.png";

const Header = (props) => {
    const [popUp, setPopUp] = useState(false);

    const getLangText = (text) => {
        return ReactHtmlParser(props.text[text]);
    };

    const setPopupVisibility = (value) => {
        setPopUp(value)
    };

    return (
        <header className="getStartedPlayer-header">

            {popUp ? <MobilePopUp setPopupVisibility={setPopupVisibility}/> : null}

            <div className="wrapper-getStarted">

                <div>
                    <img src={PlayerLogo} className="getStarted-logo" alt="Logo_image"/>
                    <h1 className="getStarted-title">{getLangText("GetStartedPlayerText")}</h1>
                </div>

                <DownloadPlayerBtn
                 gtagName={"event"}
                 gtagClick={"Upper Download click"}
                 gtagCategory={"Landing. Watch&Learn"}
                    // gtag={
                    //     ("event", "Upper Download click", {
                    //         event_category: "Landing. Watch&Learn"
                    //     })
                    // }
                 text={props.text}
                 isMobile={props.isMobile}
                 setPopupVisibility={setPopupVisibility}
                />

                <div>
                    <p className="getStarted-subtitle">{getLangText("GetStartedBottomText")}</p>
                </div>

            </div>

        </header>
    )

};

export default Header;
