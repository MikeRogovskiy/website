import React, { Component } from "react";
import ReactHtmlParser from "react-html-parser";
import arrowAnimation from "../../../assets/images/extension-instruction/arrowAnimation.svg";

import "./hintArrow.scss";

export default class HintArrow extends Component{
    constructor(props) {
        super(props);
        this.state = {
            extensionArrowAnimation:
                <div className="instruction_container_arrow">
                    <img src={arrowAnimation} id="extension-arrow"/>
                </div>,
            extensionArrowInfo:
                <div className="instruction-hint">

                    <div className="instruction-hint_content">
                        <div className="instruction-hint_content_triangle"></div>
                        <p>Для доступа ко всем функциям<br />нажмите на иконку
                            <span> EasyLang,</span> на<br />верхней панели браузера
                        </p>
                    </div>

                </div>
        };
    };

    render() {

        return (
            <div>
                { this.props.urlCondition === true && this.state.extensionArrowAnimation }
                { this.props.urlCondition === true && this.state.extensionArrowInfo }
            </div>
        );
    };
};