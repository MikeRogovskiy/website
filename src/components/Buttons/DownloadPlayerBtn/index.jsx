import React from "react";
import ReactHtmlParser from "react-html-parser";
import "./downloadPlayerBtn.scss";

export default function DownloadPlayerBtn(props) {
  const macLink =
    "https://easylang.app/downloads/eLang_Player_-_Learn_English_mac_prod.dmg";
  const windowsLink =
    "https://easylang.app/downloads/eLang_Player_-_Learn_English_win_prod.exe";
  let OSName = "Unknown OS";

  const getLangText = (text) => {
    return ReactHtmlParser(props.text[text]);
  };

  function findOSName() {
    if (navigator.appVersion.indexOf("Win") !== -1) OSName = "Windows";
    if (navigator.appVersion.indexOf("Mac") !== -1) OSName = "MacOS";
  }
  findOSName();

  const googleAnalytics = () => {
    window.gtag(props.gtagName, props.gtagClick, {
      event_category: props.gtagCategory,
    });
  };

  const DownloadPlayerBtnDesktop = () => {
    return (
      <div className="getStartedPlayer-button">
        {OSName === "Windows" && (
          <a
            className="startedPlayer-button top"
            href={windowsLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={googleAnalytics}
          >
            <span>{getLangText("GetPlayerButtonWindows")}</span>
          </a>
        )}

        {OSName === "Windows" && (
          <p>
            {getLangText("IfButtonIsForWindows")}{" "}
            <a href={macLink}>{getLangText("LinkToAnotherOSDownload")}</a>
          </p>
        )}

        {OSName === "MacOS" && (
          <a
            className="startedPlayer-button bottom"
            href={macLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={googleAnalytics}
          >
            <span>{getLangText("GetPlayerButtonMac")}</span>
          </a>
        )}
        {OSName === "MacOS" && (
          <p>
            {getLangText("IfButtonIsForMac")}{" "}
            <a href={windowsLink}>{getLangText("LinkToAnotherOSDownload")}</a>
          </p>
        )}
      </div>
    );
  };

  const DownloadPlayerBtnMobile = () => {
    return (
      <div className="getStartedPlayer-button">
        {OSName === "Windows" && (
          <a
            className="startedPlayer-button top"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              props.setPopupVisibility(true);
              googleAnalytics();
              console.log("works");
            }}
          >
            <span>{getLangText("GetPlayerButtonWindows")}</span>
          </a>
        )}

        {OSName === "Windows" && (
          <p>
            {getLangText("IfButtonIsForWindows")}{" "}
            <a
              onClick={() => {
                props.setPopupVisibility(true);
              }}
            >
              {getLangText("LinkToAnotherOSDownload")}
            </a>
          </p>
        )}

        {OSName === "MacOS" && (
          <a
            className="startedPlayer-button top"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              props.setPopupVisibility(true);
              googleAnalytics();
            }}
          >
            <span>{getLangText("GetPlayerButtonMac")}</span>
          </a>
        )}
        {OSName === "MacOS" && (
          <p>
            {getLangText("IfButtonIsForMac")}{" "}
            <a
              onClick={() => {
                props.setPopupVisibility(true);
              }}
            >
              {getLangText("LinkToAnotherOSDownload")}
            </a>
          </p>
        )}
      </div>
    );
  };

  return (
    <div>
      {props.isMobile ? (
        <DownloadPlayerBtnMobile />
      ) : (
        <DownloadPlayerBtnDesktop />
      )}
    </div>
  );
}
