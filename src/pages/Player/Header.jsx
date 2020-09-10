import React, { useState } from "react";
import ReactHtmlParser from "react-html-parser";
import MobilePopUp from "../../components/MobilePopUp";
import DownloadPlayerBtn from "../../components/Buttons/DownloadPlayerBtn";

import "./Player.scss";

// import PlayerLogo from "../../assets/images/PlayerLogo.png";
import PlayerLogo from "../../assets/images/player/logo_player.svg";
import btnDown from "../../assets/images/player/btn-down.svg";
import descrOne from "../../assets/images/player/descr-one.svg";
import descrTwo from "../../assets/images/player/descr-two.svg";
import descrThree from "../../assets/images/player/descr-three.svg";



const Header = (props) => {
    const [playerPopup, setPlayerPopup] = useState(false);

    const getLangText = (text) => {
        return ReactHtmlParser(props.text[text]);
    };

    const setPopupVisibility = (value) => {
        setPlayerPopup(value)
    };

    return (
        <header className="getStartedPlayer-header">

            {playerPopup ? <MobilePopUp setPopupVisibility={setPopupVisibility} text={props.mobilePopupText} product={"Player"}/> : null}

            <div className="wrapper-getStarted">

                <div>
                    <img src={PlayerLogo} className="getStarted-logo" alt="Logo_image"/>
                    <h1 className="getStarted-title">{getLangText("GetStartedPlayerText")}</h1>
                </div>

                <div className="getStarted-btn">
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
                 </div>

                <div>
                    {/* <p className="getStarted-subtitle">{getLangText("GetStartedBottomText")}</p> */}
                    <div className="getStarted-description">
                        
                        <div className="getStarted-description-card">
                            <div className="getStarted-description-card__img">
                                <img src={descrOne} className="getStarted-description-card__img-img" alt="description img one" />
                            </div>
                            <div className="getStarted-description-card__text">
                                {getLangText("PlayerDescriptionUnderImage-1")}
                            </div>
                        </div>

                        <div className="getStarted-description-card">
                            <div className="getStarted-description-card__img">
                                <img src={descrTwo} className="getStarted-description-card__img-img" alt="description img two" />
                            </div>
                            <div className="getStarted-description-card__text">
                                {getLangText("PlayerDescriptionUnderImage-2")}
                            </div>
                        </div>

                        <div className="getStarted-description-card">
                            <div className="getStarted-description-card__img">
                                <img src={descrThree} className="getStarted-description-card__img-img" alt="description img three" />
                            </div>
                            <div className="getStarted-description-card__text">
                                {getLangText("PlayerDescriptionUnderImage-3")}
                            </div>
                        </div>
                    </div>





                        <img src={btnDown} className="getStarted-down-btn" alt="down btn" 
                        onClick={() => { window.scrollTo(0, props.moveToSecondSection.current.offsetTop - 70)} } />
                </div>



            </div>

        </header>
    )

};

export default Header;
