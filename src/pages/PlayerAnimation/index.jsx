import React, { Component } from "react";
import "./playerAnimation.scss";

export default class PlayerAnimation extends Component {
    render(){
        return(
            <div className="animation-player">
                <svg>
                    <circle cx="50" cy="15" r="15" ></circle>
                </svg>
            </div>
        )
    }
}