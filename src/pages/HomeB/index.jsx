import React, { Component } from "react";
import "./homeB.scss";
import step1 from "../../assets/images/test/step1Test.svg"

export default class HomeB extends Component {
    render(){
        return (
            <div id="homeB-container">
                <div id="homeB-container_page">
                    <div className="homeB-container_page_buttons-folder-A">
                        <button className="start-button">НАЧАТЬ БЕСПЛАТНО</button>
                    </div>
                    <div className="homeB-container_page_content">
                        <img src={step1}></img>
                    </div>
                    <div className="homeB-container_page_buttons-folder-B">
                        <button className="start-button">НАЧАТЬ БЕСПЛАТНО</button>
                    </div>
                </div>
            </div>
        )
    }
}