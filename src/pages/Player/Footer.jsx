import React, { useState } from "react";
import MobilePopUp from "../../components/MobilePopUp";
import DownloadPlayerBtn from "../../components/Buttons/DownloadPlayerBtn"

import "./Player.scss";

const Footer = (props) => {
  const [playerPopup, setPlayerPopUp] = useState(false);

  const setPopupVisibility = (value) => {
    setPlayerPopUp(value);
  };

  return (
    <footer className="getStarted-footer">

       {playerPopup ? <MobilePopUp setPopupVisibility={setPopupVisibility} text={props.mobilePopupText} product={"Player"}/> : null}

      {/* <div className="getStartedPlayer-button"> */}
        <DownloadPlayerBtn
         gtagName={"event"}
         gtagClick={"Lower Download click"}
         gtagCategory={"Landing. Watch&Learn"}
          // gtag={
          //   ("event", "Lower Download click", {
          //     event_category: "Landing. Watch&Learn"
          //   })
          // }
         text={props.text}
         setPopupVisibility={setPopupVisibility}
         isMobile={props.isMobile}
        />
      {/* </div> */}

    </footer>
  );
};

export default Footer;
