import React, { Component } from "react";
import "./playerInstruction.scss";
import "./playerInstructionMedia.scss";

import videoExplanation from "../../assets/images/player-instruction/video-explanation.svg";
import subtitlesExplanation from "../../assets/images/player-instruction/subtitles-explanation.svg";
import approvedLinkCircle from "../../assets/images/player-instruction/greenCircleOk.svg";

export default class PlayerInstruction extends Component {
  componentDidMount() {
    document.querySelector("#container_header_right img").style.visibility =
      "hidden";
  }

  render() {
    function sendMessage(str) {
      window.parent.postMessage(str, "*");
    }

    // window.document.querySelector("body").onfocus = function (){
    //     getClipboard();
    // };

    function getClipboard() {
      function checkIfYouTube(clipboardData) {
        const admitedYouTubeName = new RegExp("https://www.youtube.com/");
        const deniedYouTubeName = "Innpropriate YouTube link";

        if (clipboardData.match(admitedYouTubeName)) {
          document.querySelector("#link-from-clipboard").innerText =
            "URL Copied";
          document.querySelector(
            "#container_header_right img"
          ).style.visibility = "visible";
        } else if (clipboardData.length > 10) {
          document.querySelector(
            "#link-from-clipboard"
          ).innerText = deniedYouTubeName;
          document.querySelector(
            "#container_header_right img"
          ).style.visibility = "hidden";
        }
      }

      navigator.clipboard
        .readText()
        .then((clipText) => checkIfYouTube(clipText));
    }

    return (
      <div id="player-instruction">
        <div id="player-instruction_container">
          <h1>Download YouTube video with subtitles</h1>
          <div id="container_header" className="player-instruction-content">
            <div id="container_header_left">
              <h2>1.</h2>
              <p>
                Cope URL Video from
                <button
                  onClick={() => {
                    sendMessage("youtube");
                  }}
                >
                  YouTube
                </button>
                to the buffer (Ctrl + C)
              </p>
            </div>
            <div id="container_header_right">
              <img src={approvedLinkCircle} alt="approvedLinkCircle"></img>
              <p id="link-from-clipboard" />
            </div>
          </div>
          <div id="container_main" className="player-instruction-content">
            <h2>2.</h2>
            <button
              className="download-btn"
              onClick={() => {
                sendMessage("video");
              }}
            >
              Download Video
            </button>
            <p>and</p>
            <button
              className="download-btn"
              onClick={() => {
                sendMessage("subtitles");
              }}
            >
              Download Subtitles
            </button>
          </div>
          <div id="container_footer">
            <h2>3.</h2>
            <div
              id="container_footer_folder"
              className="player-instruction-content"
            >
              <div
                id="container_footer_folder_download"
                className="player-instruction-block"
              >
                <h3>Open Download Video</h3>
                <button
                  onClick={() => {
                    sendMessage("video-from-image");
                  }}
                >
                  <img id="footer_images_download" src={videoExplanation}></img>
                </button>
              </div>
              <div
                id="container_footer_folder_and"
                className="player-instruction-block"
              >
                <h3>and</h3>
              </div>
              <div
                id="container_footer_folder_subtitles"
                className="player-instruction-block"
              >
                <h3>Open Download Subtitles</h3>
                <button>
                  <img
                    id="footer_images_subtitles"
                    src={subtitlesExplanation}
                  ></img>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
