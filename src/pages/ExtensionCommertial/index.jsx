import React, { Component } from "react";
import "./extensionCommertial.scss"

import sideImgleft from "../../assets/images/extension-commertial/side-image-left.svg";
import mainImg from "../../assets/images/extension-commertial/main-brain.svg";
// import sideImgRight from "../../assets/images/extension-commertial/side-image-right.svg";

export default class ExtensionCommertial extends Component{
    render(){
        function sendM(str){
            window.postMessage(str, "*")
            console.log(str)
        };

        return(
            <div id="extension-commertial">
                <div id="extension-commertial_conatiner">

                    <div id="commertial_container_header">
                        <img src={sideImgleft}></img>
                        {/* <input id="close-pop-commertial" type="image" src={sideImgRight}></input> */}
                    </div>

                    <div id="commertial_container_main">
                        <div id="commertial_container_main_title">
                            <h2>Читаешь иностранные тексты??!</h2>

                        </div>
                        <div id="commertial_container_main_content">

                            <div id="commertial_container_main_content_image">
                                <img src={mainImg}></img>
                            </div>
                            <div id="commertial_container_main_content_text">
                                <div id="commertial_container_main_content_text_title">
                                    <h2>Мы поможем!</h2>
                                </div>
                                <ul>
                                    <li>- <span>Переводит</span> все что скажете</li>
                                    <li>- <span>Сохраняй</span> слова в игры для повтора</li>
                                    <li>- <span>Тренируй</span> память, вспоминая слова</li>
                                </ul>
                                <button id="download-extension" onClick={() => {sendM("download-extension")}}>УСТАНОВИТЬ РАСШИРЕНИЕ</button>
                                <button id="close-player" onClick={() => {sendM("close-player")}}>ЗАКРЫТЬ ПЛЕЕР</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}