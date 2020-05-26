import React, { Component } from "react";

import innerInstruction from "../../assets/images/extension-inner-instruction/mainInnerInstruction.svg";

export default class ExtensionInnerInstruction extends Component {
    render(){
        return(
            <div>
                <img src={innerInstruction} width="314px" height="354px"></img>
            </div>
        )
    }
}