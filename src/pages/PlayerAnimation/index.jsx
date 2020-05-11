import React, { Component } from "react";
import * as d3 from "d3";
import coordinates from "./coordinates.json";
import ReactHtmlParser from "react-html-parser";


import "./playerAnimation.scss";

import backgroundA from "../../assets/images/player-animation/playerBackgroundTestA.svg";
import backgroundB from "../../assets/images/player-animation/playerBackgroundTestB.svg";

export default class PlayerAnimation extends Component {
    componentDidMount() {
        document.querySelector("#main-field_background").style.backgroundImage = "radial-gradient(32px circle at  " +
            "right 8.5% top 2.3% , black 100px, transparent 50px)";
    };

    getLangText(text) {
        return ReactHtmlParser(this.props.text[text]);
    };

    render(){

        const textData = this.props.text;
        
        function changeBackground(backgroundImage){
            document.querySelector("#main-field_container").style.backgroundImage = `url(${backgroundImage})`;
        };

        function changeBackgroundColor(size, right, top, size2){
            document.querySelector("#main-field_background").style.backgroundImage = `radial-gradient(${size} circle at  ` +
                `right ${right} top ${top} , black ${size2}, transparent 50px)`;
        };

        function moveCircle(cxInner, cyInner, rInner, strokeWidthInner, delay,
            cxOuter, cyOuter, rOuter, strokeWidthOuter){

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
        };

        function moveRectangle(delay, rectX, rectY, rectH, rectW){
            d3.select("rect")
                .transition()
                .delay(delay)
                .duration(2000)
                .attr("x", rectX)
                .attr("y", rectY)
                .attr("height", rectH)
                .attr("width", rectW)

        };


        function moveText(delay, textRectXA, textRectYA,
                        textRectXB, textRectYB, textRectXC, textRectYC,
                        textA, textB, textC){

            d3.select("#textA")
                .transition()
                .delay(delay)
                .duration(2000)
                .attr("x", textRectXA)
                .attr("y", textRectYA)
                .text(textA)
            d3.select("#textB")
                .transition()
                .delay(delay)
                .duration(2000)
                .attr("x", textRectXB)
                .attr("y", textRectYB)
                .text(textB)
            d3.select("#textC")
                .transition()
                .delay(delay)
                .duration(2000)
                .attr("x", textRectXC)
                .attr("y", textRectYC)
                .text(textC)
        };

        function stepA(){
            moveCircle(coordinates.stepA.cxInner, coordinates.stepA.cyInner, coordinates.stepA.rInner,
                coordinates.stepA.strokeWidthInner, coordinates.stepA.delay, coordinates.stepA.cxOuter,
                coordinates.stepA.cyOuter, coordinates.stepA.rOuter, coordinates.stepA.strokeWidthOuter,
            );

            moveRectangle(coordinates.stepA.delay, coordinates.stepA.rectX, coordinates.stepA.rectY,
                coordinates.stepA.rectH, coordinates.stepA.rectW
            );

            moveText( coordinates.stepA.delay, coordinates.stepA.textRectXA, coordinates.stepA.textRectYA,
                coordinates.stepA.textRectXB, coordinates.stepA.textRectYB,
                coordinates.stepA.textRectXC, coordinates.stepA.textRectYC,
                textData.step2A,  textData.step2B,  textData.step2C
            );

            setTimeout(changeBackgroundColor(coordinates.stepA.blackSize, coordinates.stepA.blackRight,
                coordinates.stepA.blackTop, coordinates.stepA.blackSize2), 2700
            );

            setTimeout(changeBackground(backgroundA), 300);
        };

        function stepB(){
            moveCircle(coordinates.stepB.cxInner, coordinates.stepB.cyInner, coordinates.stepB.rInner,
                coordinates.stepB.strokeWidthInner, coordinates.stepB.delay, coordinates.stepB.cxOuter,
                coordinates.stepB.cyOuter, coordinates.stepB.rOuter, coordinates.stepB.strokeWidthOuter,
            );
            
            moveRectangle(coordinates.stepB.delay, coordinates.stepB.rectX, coordinates.stepB.rectY,
                coordinates.stepB.rectH, coordinates.stepB.rectW
            );

            moveText( coordinates.stepB.delay, coordinates.stepB.textRectXA, coordinates.stepB.textRectYA,
                coordinates.stepB.textRectXB, coordinates.stepB.textRectYB,
                coordinates.stepB.textRectXC, coordinates.stepB.textRectYC,
                textData.step3A,  textData.step3B,  textData.step3C
            );

            setTimeout(changeBackgroundColor(coordinates.stepB.blackSize, coordinates.stepB.blackRight,
                coordinates.stepB.blackTop, coordinates.stepB.blackSize2), 2700
            );

            setTimeout(changeBackground(backgroundB), 300);
        };

        function stepC(){
            moveCircle(coordinates.stepC.cxInner, coordinates.stepC.cyInner, coordinates.stepC.rInner,
                coordinates.stepC.strokeWidthInner, coordinates.stepC.delay, coordinates.stepC.cxOuter,
                coordinates.stepC.cyOuter, coordinates.stepC.rOuter, coordinates.stepC.strokeWidthOuter,
            );
            
            moveRectangle(coordinates.stepC.delay, coordinates.stepC.rectX, coordinates.stepC.rectY,
                coordinates.stepC.rectH, coordinates.stepC.rectW
            );

            moveText( coordinates.stepC.delay, coordinates.stepC.textRectXA, coordinates.stepC.textRectYA,
                coordinates.stepC.textRectXB, coordinates.stepC.textRectYB,
                coordinates.stepC.textRectXC, coordinates.stepC.textRectYC,
                textData.step4A,  textData.step4B,  textData.step4C
            );

            setTimeout(changeBackgroundColor(coordinates.stepC.blackSize, coordinates.stepC.blackRight,
                coordinates.stepC.blackTop, coordinates.stepC.blackSize2), 2700
            );

        };

        function stepD(){
            moveCircle(coordinates.stepD.cxInner, coordinates.stepD.cyInner, coordinates.stepD.rInner,
                coordinates.stepD.strokeWidthInner, coordinates.stepD.delay, coordinates.stepD.cxOuter,
                coordinates.stepD.cyOuter, coordinates.stepD.rOuter, coordinates.stepD.strokeWidthOuter,
            );
            
            moveRectangle(coordinates.stepD.delay, coordinates.stepD.rectX, coordinates.stepD.rectY,
                coordinates.stepD.rectH, coordinates.stepD.rectW
            );

            moveText(coordinates.stepD.delay, coordinates.stepD.textRectXA, coordinates.stepD.textRectYA,
                coordinates.stepD.textRectXB, coordinates.stepD.textRectYB,
                coordinates.stepD.textRectXC, coordinates.stepD.textRectYC,
                textData.step5A,  textData.step5B,  textData.step5C
            );

            setTimeout(changeBackgroundColor(coordinates.stepD.blackSize, coordinates.stepD.blackRight,
                coordinates.stepD.blackTop, coordinates.stepD.blackSize2), 2700);

        };

        function stepE(){
            moveCircle(coordinates.stepE.cxInner, coordinates.stepE.cyInner, coordinates.stepE.rInner,
                coordinates.stepE.strokeWidthInner, coordinates.stepE.delay, coordinates.stepE.cxOuter,
                coordinates.stepE.cyOuter, coordinates.stepE.rOuter, coordinates.stepE.strokeWidthOuter,
            );
            
            moveRectangle(coordinates.stepE.delay, coordinates.stepE.rectX, coordinates.stepE.rectY,
                coordinates.stepE.rectH, coordinates.stepE.rectW
            );

            moveText(coordinates.stepE.delay, coordinates.stepE.textRectXA, coordinates.stepE.textRectYA,
                coordinates.stepE.textRectXB, coordinates.stepE.textRectYB,
                coordinates.stepE.textRectXC, coordinates.stepE.textRectYC,
                textData.step6A,  textData.step6B,  textData.step6C
            );

            setTimeout(changeBackgroundColor(coordinates.stepE.blackSize, coordinates.stepE.blackRight,
                coordinates.stepE.blackTop, coordinates.stepE.blackSize2), 2700);

        };

        function stepF(){
            moveCircle(coordinates.stepF.cxInner, coordinates.stepF.cyInner, coordinates.stepF.rInner,
                coordinates.stepF.strokeWidthInner, coordinates.stepF.delay, coordinates.stepF.cxOuter,
                coordinates.stepF.cyOuter, coordinates.stepF.rOuter, coordinates.stepF.strokeWidthOuter,
                coordinates.stepF.rectX, coordinates.stepF.rectY);

            moveRectangle(coordinates.stepF.delay, coordinates.stepF.rectX, coordinates.stepF.rectY,
                coordinates.stepF.rectH, coordinates.stepF.rectW
            );

            moveText(coordinates.stepF.delay, coordinates.stepF.textRectXA, coordinates.stepF.textRectYA,
                coordinates.stepF.textRectXB, coordinates.stepF.textRectYB,
                coordinates.stepF.textRectXC, coordinates.stepF.textRectYC,
                textData.step7A,  textData.step7B,  textData.step7C
            );

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

                        <circle id="circleOuter" cx="457" cy="7" r="28" fill="none"
                                strokeWidth="25" stroke="#6AB2F5"  strokeOpacity="0.1" />

                        <g>
                            <rect id="rectangle" x="330" y="50" width="100" height="50"
                                    fill="white" stroke="#6AB2F5"  rx="2" />
                            <text id="textA" className="rectangle-text" x="340" y="65">
                                {this.getLangText("step1A")}
                            </text>
                            <text id="textB" className="rectangle-text" x="342" y="78">
                                {this.getLangText("step1B")}
                            </text>
                            <text id="textC" className="rectangle-text" x="346" y="90">
                                {this.getLangText("step1C")}
                            </text>
                        </g>
                    </svg>

                </div>

            </div>
        );

    };

};