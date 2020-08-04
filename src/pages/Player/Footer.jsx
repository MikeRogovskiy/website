import React, { useState } from "react";
import MobilePopUp from "../../components/MobilePopUp";
import DonwloadPlayerBtn from "../../components/DownloadPlayerBtn"

import "./Player.scss";

const Footer = (props) => {
  const [popUp, setPopUp] = useState(false);

  const updateProps = (value) => {
    setPopUp(value);
  };

  return (
    <footer className="getStarted-footer">

       {popUp ? <MobilePopUp updateProps={updateProps}/> : null}

      {/* <div className="getStartedPlayer-button"> */}
        <DonwloadPlayerBtn
          gtag={
            ("event", "Lower Download click", {
              event_category: "Landing. Watch&Learn"
            })
          }
          text={props.text}
          updateProps={updateProps}
        />
      {/* </div> */}

    </footer>
  );
};

export default Footer;
