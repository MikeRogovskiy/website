import React, { Component } from "react";
import * as d3 from 'd3';
import coordinates from './coordinates.json';


import "./playerAnimation.scss";

// import rectangleA from "../../assets/images/player-animation/step1Rect.svg";
// import rectangleB from "../../assets/images/player-animation/step2Rect.svg";
// import rectangleC from "../../assets/images/player-animation/step3Rect.svg";
// import rectangleD from "../../assets/images/player-animation/step4Rect.svg";
// import rectangleE from "../../assets/images/player-animation/step5Rect.svg";
// import rectangleF from "../../assets/images/player-animation/step6Rect.svg";
// import rectangleG from "../../assets/images/player-animation/step7Rect.svg";


import backgroundA from "../../assets/images/player-animation/playerBackgroundTestA.svg";
import backgroundB from "../../assets/images/player-animation/playerBackgroundTestB.svg";

export default class PlayerAnimation extends Component {
    componentDidMount() {
        document.querySelector("#main-field_background").style.backgroundImage = "radial-gradient(32px circle at  " +
            "right 8.5% top 2.3% , black 100px, transparent 50px)";
    };

    render(){
        function moveCircle(cxInner, cyInner, rInner, strokeWidthInner, delay,
                            cxOuter, cyOuter, rOuter, strokeWidthOuter, rectX, rectY) {

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
            d3.select("rect")
                .transition()
                .delay(delay)
                .duration(2000)
                // .attr("xlink:href", rect)
                .attr("x", rectX)
                .attr("y", rectY)
                
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
                coordinates.stepA.cyOuter, coordinates.stepA.rOuter, coordinates.stepA.strokeWidthOuter,
                coordinates.stepA.rectX, coordinates.stepA.rectY);

            setTimeout(changeBackgroundColor(coordinates.stepA.blackSize, coordinates.stepA.blackRight,
                coordinates.stepA.blackTop, coordinates.stepA.blackSize2), 2700);

            setTimeout(changeBackground(backgroundA), 300)
        };

        function stepB(){
            moveCircle(coordinates.stepB.cxInner, coordinates.stepB.cyInner, coordinates.stepB.rInner,
                coordinates.stepB.strokeWidthInner, coordinates.stepB.delay, coordinates.stepB.cxOuter,
                coordinates.stepB.cyOuter, coordinates.stepB.rOuter, coordinates.stepB.strokeWidthOuter,
                coordinates.stepB.rectX, coordinates.stepB.rectY);

            setTimeout(changeBackgroundColor(coordinates.stepB.blackSize, coordinates.stepB.blackRight,
                coordinates.stepB.blackTop, coordinates.stepB.blackSize2), 2700);

            setTimeout(changeBackground(backgroundB), 300)
        };

        function stepC(){
            moveCircle(coordinates.stepC.cxInner, coordinates.stepC.cyInner, coordinates.stepC.rInner,
                coordinates.stepC.strokeWidthInner, coordinates.stepC.delay, coordinates.stepC.cxOuter,
                coordinates.stepC.cyOuter, coordinates.stepC.rOuter, coordinates.stepC.strokeWidthOuter,
                coordinates.stepC.rectX, coordinates.stepC.rectY);

            setTimeout(changeBackgroundColor(coordinates.stepC.blackSize, coordinates.stepC.blackRight,
                coordinates.stepC.blackTop, coordinates.stepC.blackSize2), 2700);


        };

        function stepD(){
            moveCircle(coordinates.stepD.cxInner, coordinates.stepD.cyInner, coordinates.stepD.rInner,
                coordinates.stepD.strokeWidthInner, coordinates.stepD.delay, coordinates.stepD.cxOuter,
                coordinates.stepD.cyOuter, coordinates.stepD.rOuter, coordinates.stepD.strokeWidthOuter,
                coordinates.stepD.rectX, coordinates.stepD.rectY);

            setTimeout(changeBackgroundColor(coordinates.stepD.blackSize, coordinates.stepD.blackRight,
                coordinates.stepD.blackTop, coordinates.stepD.blackSize2), 2700);

        };

        
        function stepE(){
            moveCircle(coordinates.stepE.cxInner, coordinates.stepE.cyInner, coordinates.stepE.rInner,
                coordinates.stepE.strokeWidthInner, coordinates.stepE.delay, coordinates.stepE.cxOuter,
                coordinates.stepE.cyOuter, coordinates.stepE.rOuter, coordinates.stepE.strokeWidthOuter,
                coordinates.stepE.rectX, coordinates.stepE.rectY);

            setTimeout(changeBackgroundColor(coordinates.stepE.blackSize, coordinates.stepE.blackRight,
                coordinates.stepE.blackTop, coordinates.stepE.blackSize2), 2700);

        };

        function stepF(){
            moveCircle(coordinates.stepF.cxInner, coordinates.stepF.cyInner, coordinates.stepF.rInner,
                coordinates.stepF.strokeWidthInner, coordinates.stepF.delay, coordinates.stepF.cxOuter,
                coordinates.stepF.cyOuter, coordinates.stepF.rOuter, coordinates.stepF.strokeWidthOuter,
                coordinates.stepF.rectX, coordinates.stepF.rectY);

            // setTimeout(changeBackgroundColor(coordinates.stepF.blackSize, coordinates.stepF.blackRight,
            //     coordinates.stepF.blackTop, coordinates.stepF.blackSize2), 2700);

        };


        return(
            <div id="main-field">
                <div id="btn-folder">
                    <button className="test-btn" onClick={stepA}>StepA</button>
                    <button className="test-btn" onClick={stepB}>StepB</button>
                    <button className="test-btn" onClick={stepC}>StepC</button>
                    <button className="test-btn" onClick={stepD}>StepD</button>
                    <button className="test-btn" onClick={stepE}>StepE</button>
                    <button className="test-btn" onClick={stepF}>StepF</button>
                </div>

                <div id="main-field_container">
                <div id="main-field_background">
                </div>
                    <svg viewBox="0 0 500 300" id="steps">
                        <circle id="circleInner"  cx="457" cy="7" r="12" fill="none"
                                strokeWidth="8" stroke="#6AB2F5" />

                        <circle id="circleOuter" cx="457" cy="7" r="20" fill="none"
                                strokeWidth="25" stroke="#6AB2F5"  strokeOpacity="0.1" />

                        {/* <image xlinkHref={rectangleA} x="330" y="30" width="100" height="50" /> */}
                        <rect  x="330" y="30" width="100" height="50" fill="white" />

                        
                    </svg>

                </div>

                
            </div>
        );

    };

};