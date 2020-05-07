import React, { Component } from "react";
import * as d3 from 'd3';
import coordinates from './coordinates.json';


import "./playerAnimation.scss";

import stepA from "../../assets/images/player-animation/step1Rect.svg";
import stepB from "../../assets/images/player-animation/step2Rect.svg";
import backgroundA from "../../assets/images/player-animation/playerBackgroundTestA.svg";
import backgroundB from "../../assets/images/player-animation/playerBackgroundTestB.svg";

export default class PlayerAnimation extends Component {
    componentDidMount() {
        document.querySelector("#main-field_background").style.backgroundImage = "radial-gradient(32px circle at  " +
            "right 8.5% top 4% , black 100px, transparent 50px)";
    };

    render(){
        // const mainField = document.querySelector("#main-field_container");
        // const mainFieldBackground = document.querySelector("#main-field_background");
        function moveCircle(cxInner, cyInner, rInner, strokeWidthInner, delay,
                            cxOuter, cyOuter, rOuter, strokeWidthOuter) {

            d3.select("#circleInner")
                .transition()
                .delay(delay)
                .duration(2000)
                .attr("cx", cxInner)
                .attr("cy", cyInner)
                .attr("r", rInner)
                .attr("stroke-width", strokeWidthInner)

            d3.select("#circleOuter")
                .transition()
                .delay(delay)
                .duration(2000)
                .attr("cx", cxOuter)
                .attr("cy", cyOuter)
                .attr("r", rOuter)
                .attr("stroke-width", strokeWidthOuter)
            d3.select("image")
                .attr("xlink:href", `${stepA}`)
        };

        function changeBackground(backgroundImage){
            document.querySelector("#main-field_container").style.backgroundImage = `url(${backgroundImage})`;
        };

        function changeBackgroundColor(size, right, top, size2){
            document.querySelector("#main-field_background").style.backgroundImage = `radial-gradient(${size} circle at  ` +
                `right ${right} top ${top} , black ${size2}, transparent 50px)`;
        };




        function stepA(){
            moveCircle(coordinates.stepA.cxInner, coordinates.stepA.cyInner, coordinates.stepA.rInner,
                coordinates.stepA.strokeWidthInner, coordinates.stepA.delay, coordinates.stepA.cxOuter,
                coordinates.stepA.cyOuter, coordinates.stepA.rOuter, coordinates.stepA.strokeWidthOuter);

            setTimeout(changeBackgroundColor(coordinates.stepA.blackSize, coordinates.stepA.blackRight,
                coordinates.stepA.blackTop, coordinates.stepA.blackSize2), 2700);
            setTimeout(changeBackground(backgroundA), 300)
        };

        function stepB(){
            moveCircle(coordinates.stepB.cxInner, coordinates.stepB.cyInner, coordinates.stepB.rInner,
                        coordinates.stepB.strokeWidthInner, coordinates.stepB.delay, coordinates.stepB.cxOuter,
                        coordinates.stepB.cyOuter, coordinates.stepB.rOuter, coordinates.stepB.strokeWidthOuter);

            setTimeout(changeBackgroundColor(coordinates.stepB.blackSize, coordinates.stepB.blackRight,
                coordinates.stepB.blackTop, coordinates.stepB.blackSize2), 2700);
            setTimeout(changeBackground(backgroundB), 300)
        };


        return(
            <div id="main-field">
                <div id="btn-folder">
                    <button className="test-btn" onClick={stepA}>StepA</button>
                    <button className="test-btn" onClick={stepB}>StepB</button>
                    <button className="test-btn" onClick={stepA}>StepC</button>
                </div>

                <div id="main-field_container">
                    <svg viewBox="0 0 500 300" id="steps">
                        <circle id="circleInner"  cx="457" cy="10" r="12" fill="none"
                                strokeWidth="8" stroke="#6AB2F5" />

                        <circle id="circleOuter" cx="457" cy="10" r="20" fill="none"
                                strokeWidth="25" stroke="#6AB2F5"  strokeOpacity="0.1" />

                        <image x="330" y="40" width="100" height="50" />
                    </svg>

                </div>

                <div id="main-field_background">
                </div>
            </div>
        )
    }
}