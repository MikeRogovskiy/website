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
        <DonwloadPlayerBtn text={props.text} updateProps={updateProps}/>
      {/* </div> */}

    </footer>
  );
};

export default Footer;
