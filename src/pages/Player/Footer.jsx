import React from "react";
import ReactHtmlParser from "react-html-parser";

import "./Player.scss";

const Footer = (props) => {
  const getLangText = (text) => {
    return ReactHtmlParser(props.text[text]);
  };

  const macLink = "http://easylang.app/downloads/eLang_Player_-_Learn_English_mac_prod.dmg";
  const windowsLink = "http://easylang.app/downloads/EasyLang.Player-Beta_win_prod.exe";

  let OSName = "Unknown OS";

  function findOSName() {
    if (navigator.appVersion.indexOf("Win") != -1) OSName = "Windows";
    if (navigator.appVersion.indexOf("Mac") != -1) OSName = "MacOS";
    // if (navigator.appVersion.indexOf("X11")!=-1) OSName="UNIX";
    // if (navigator.appVersion.indexOf("Linux")!=-1) OSName="Linux";
  }
  findOSName();

  return (
    <footer className="getStarted-footer">
      <div className="getStartedPlayer-button">
        {OSName === "Windows" && (
          <a
            className="startedPlayer-button top"
            href={windowsLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              window.gtag("event", "Upper Download click", {
                event_category: "Landing. Watch&Learn",
              });
            }}
          >
            <span>{getLangText("GetPlayerButtonWindows")}</span>
          </a>
        )}
        {OSName === "Windows" && (
          <p>
            {getLangText("IfButtonIsForWindows")}{" "}
            <a
              href={macLink}
              onClick={() => {
                window.gtag("event", "Lower Download click", {
                  event_category: "Landing. Watch&Learn",
                });
              }}
            >
              {getLangText("LinkToAnotherOSDownload")}
            </a>
          </p>
        )}
        {OSName === "MacOS" && (
          <a
            className="startedPlayer-button top"
            href={macLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              window.gtag("event", "Upper Download click", {
                event_category: "Landing. Watch&Learn",
              });
            }}
          >
            <span>{getLangText("GetPlayerButtonMac")}</span>
          </a>
        )}
        {OSName === "MacOS" && (
          <p>
            {getLangText("IfButtonIsForMac")}{" "}
            <a
              href={windowsLink}
              onClick={() => {
                window.gtag("event", "Lower Download click", {
                  event_category: "Landing. Watch&Learn",
                });
              }}
            >
              {getLangText("LinkToAnotherOSDownload")}
            </a>
          </p>
        )}
      </div>
    </footer>
  );
};

export default Footer;
