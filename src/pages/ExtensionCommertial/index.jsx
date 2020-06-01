import React, { Component } from "react";
import "./extensionCommertial.scss"

import sideImg from "../../assets/images/extension-commertial/side-image.svg";
import mainImg from "../../assets/images/extension-commertial/main-brain.svg";
import testi from "../../assets/images/extension-commertial/Group 308.svg";

export default class ExtensionCommertial extends Component{
    render(){
        return(
            <div id="extension-commertial">
                <div id="extension-commertial_conatiner">

                    <div id="commertial_container_header">
                        <img src={sideImg}></img>
                        <input id="close-pop-commertial" type="image" src={testi}></input>
                        {/* <h3 id="close-pop-commertial">X</h3> */}
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
                                <button id="download-extension">УСТАНОВИТЬ РАСШИРЕНИЕ</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}