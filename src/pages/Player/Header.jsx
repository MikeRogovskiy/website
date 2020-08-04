import React, { useState } from "react";
import ReactHtmlParser from "react-html-parser";
import MobilePopUp from "../../components/MobilePopUp";
import DonwloadPlayerBtn from "../../components/DownloadPlayerBtn";

import "./Player.scss";

import PlayerLogo from "../../assets/images/PlayerLogo.png";

const Header = (props) => {
    const [popUp, setPopUp] = useState(false);

    const getLangText = (text) => {
        return ReactHtmlParser(props.text[text]);
    };

    const updateProps = (value) => {
        setPopUp(value)
    };

    return (
        <header className="getStartedPlayer-header">

            {popUp ? <MobilePopUp updateProps={updateProps}/> : null}

            <div className="wrapper-getStarted">

                <div>
                    <img src={PlayerLogo} className="getStarted-logo" alt="Logo_image"></img>
                    <h1 className="getStarted-title">{getLangText("GetStartedPlayerText")}</h1>
                </div>

                <DonwloadPlayerBtn 
                     gtag={
                        ("event", "Upper Download click", {
                          event_category: "Landing.Watch&Learn"
                        })
                      }
                    text={props.text} 
                    updateProps={updateProps}
                />

                <div>
                    <p className="getStarted-subtitle">{getLangText("GetStartedBottomText")}</p>
                </div>

            </div>

        </header>
    )

};

export default Header;