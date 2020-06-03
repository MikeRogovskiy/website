import React, { Component } from "react";
import "./playerInstruction.scss";

import videoExplanation from "../../assets/images/player-instruction/video-explanation.svg";
import subtitlesExplanation from "../../assets/images/player-instruction/subtitles-explanation.svg";

import smallArrow from "../../assets/images/player-instruction/small-arrow.svg";
import bigArrow from "../../assets/images/player-instruction/big-arrow.svg";



export default class PlayerInstruction extends Component {
    render(){
        function sendMessage(str){
            window.parent.postMessage(str, "*")
        };

        return(
            <div id="player-instruction">
                <div id="player-instruction_container">
                    <h1>Download YouTube video with subtitles</h1>
                    <div id="container_header" className="player-instruction-content">
                        <h2>1.</h2><p>Cope URL Video from <button onClick={() => {sendMessage("youtube")}}>YouTube</button> to the buffer (Ctrl + C)</p>
                    </div>
                    <div id="container_main" className="player-instruction-content">
                        <h2>2.</h2>
                        <button className="download-btn" onClick={() => {sendMessage("video")}}>Download Video</button>
                        <p>and</p>
                        <button className="download-btn" onClick={() => {sendMessage("subtitles")}}>Download Subtitles</button>
                    </div>
                    <div id="container_footer">
                        <div id="container_footer_text" className="player-instruction-content">
                            <h2>3.</h2>
                            <h3>Open Download Video</h3>
                            <h3>and</h3>
                            <h3>Open Download Subtitles</h3>
                        </div>
                        <div id="container_footer_images" className="player-instruction-content">
                            <div id="container_footer_images_arrows">
                                <img src={smallArrow}></img>
                                <img src={bigArrow}></img>
                            </div>
                            <img src={videoExplanation}></img>
                            <img id="footer_images_subtitles" src={subtitlesExplanation}></img>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}