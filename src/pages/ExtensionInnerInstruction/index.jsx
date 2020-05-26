import React, { Component } from "react";

import "./extensionInnerInstruction.scss";

import innerInstruction from "../../assets/images/extension-inner-instruction/mainInnerInstruction.svg";

export default class ExtensionInnerInstruction extends Component {
    render(){
        return(
            <div id="inner-instruction-container">
                <img src={innerInstruction}></img>
            </div>
        )
    }
}