import React, { Component } from "react";
import * as d3 from "d3";
import coordinates from "./coordinates.json";
import ReactHtmlParser from "react-html-parser";


import "./playerAnimation.scss";

import backgroundA from "../../assets/images/player-animation/playerBackgroundTestA.svg";
import backgroundB from "../../assets/images/player-animation/playerBackgroundTestB.svg";
// import logo from "../../assets/images/player-animation/roundLetterArrow.svg";

export default class PlayerAnimation extends Component {
    componentDidMount() {
        document.querySelector("#black-circle").style.backgroundImage = "radial-gradient(circle at  " +
            "right 8.5% top 2.3% , black 1%, transparent 2.5%)";
    };

    getLangText(text) {
        return ReactHtmlParser(this.props.text[text]);
    };

    render(){

        const textData = this.props.text;

        function changeBackground(backgroundImage){
            document.querySelector("#main-field_container").style.backgroundImage = `url(${backgroundImage})`;
        };

        function changeBackgroundColor(right, top, size, size2){

            const blackCircle = document.querySelector("#black-circle");

            blackCircle.style.backgroundImage = `radial-gradient(circle at  ` +
                `right ${right} top ${top} , black ${size}, transparent ${size2})`;
            blackCircle.style.animation = "smoothAppearBlackCircle 3s ease-in-out";

            function stopAnimation(){
                blackCircle.style.animation = "none";
            };

            setTimeout(stopAnimation, 3000)
           

        };

        function moveCircle(cxInner, cyInner, rInner, strokeWidthInner, delay, // done
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

        function moveRectangle(delay, rectX, rectY, rectH, rectW){ // done

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

        function moveArrows(generalBtnX, generalBtnY, generealBtnSize, // done
            rightBtnX, rightBtnY,
            downBtnY,
            leftBtnX, leftBtnY,

            delay,

            topArrowRectangleX, topArrowRectangleY, topArrowTriangle, topArrowTextX, topArrowTextY, topArrowFill,
            rightArrowRectangleX, rightArrowRectangleY, rightArrowTriangle, rightArrowTextX, rightArrowTextYA, rightArrowTextYB, rightArrowFill,
            downArrowRectangleX, downArrowRectangleY, downArrowTriangle, downArrowFill,
            leftArrowRectangleX, leftArrowRectangleY, leftArrowTriangle, leftArrowTextX, leftArrowTextYA, leftArrowTextYB, leftArrowFill

            ){
            d3.select("#low-arrows")
            .attr("visibility", "visible")

            d3.selectAll(".rectangle-arrows")
                .attr("x", generalBtnX)
                .attr("y", generalBtnY)
                .attr("width", generealBtnSize)
                .attr("height", generealBtnSize)
                .attr("stroke-width", "0.2")
                .attr("fill", "none")
            .attr("rx", "5")

            d3.select("#arrow-top")
            .attr("stroke", topArrowFill)
            d3.select("#arrow-right")
                .attr("x", rightBtnX)
                .attr("y", rightBtnY)
            .attr("stroke", rightArrowFill)
            d3.select("#arrow-down")
                .attr("y", downBtnY)
            .attr("stroke", downArrowFill)
            d3.select("#arrow-left")
                .attr("x", leftBtnX)
                .attr("y", leftBtnY)
            .attr("stroke", leftArrowFill)

            d3.select("#arrow-rectangle-top")
                .attr("x", topArrowRectangleX)
                .attr("y", topArrowRectangleY)
                .attr("width", "1")
                .attr("height", "5")
            .attr("fill", topArrowFill)
            d3.select("#arrow-triangle-top")
                .attr("points", topArrowTriangle)
            .attr("fill", topArrowFill)
            d3.select("#top-arrow-text")
                .attr("x", topArrowTextX)
                .attr("y", topArrowTextY)
            .attr("fill", topArrowFill)

            d3.select("#arrow-rectangle-right")
                .attr("x", rightArrowRectangleX)
                .attr("y", rightArrowRectangleY)
                .attr("width", "5")
                .attr("height", "1")
            .attr("fill", rightArrowFill)
            d3.select("#arrow-triangle-right")
                .attr("points", rightArrowTriangle)
            .attr("fill", rightArrowFill)

            d3.select("#right-arrow-textA")
                .attr("x", rightArrowTextX)
                .attr("y", rightArrowTextYA)
            .attr("fill", rightArrowFill)
            d3.select("#right-arrow-textB")
                .attr("x", rightArrowTextX)
                .attr("y", rightArrowTextYB)
            .attr("fill", rightArrowFill)


            d3.select("#arrow-rectangle-down")
                .attr("x", downArrowRectangleX)
                .attr("y", downArrowRectangleY)
                .attr("width", "1")
                .attr("height", "5")
            .attr("fill", downArrowFill)
            d3.select("#arrow-triangle-down")
                .attr("points", downArrowTriangle)
            .attr("fill", downArrowFill)

            d3.select("#arrow-rectangle-left")
                .attr("x", leftArrowRectangleX)
                .attr("y", leftArrowRectangleY)
                .attr("width", "5")
                .attr("height", "1")
            .attr("fill", leftArrowFill)
            d3.select("#arrow-triangle-left")
                .attr("points", leftArrowTriangle)
            .attr("fill", leftArrowFill)

            d3.select("#left-arrow-textA")
                .attr("x", leftArrowTextX)
                .attr("y", leftArrowTextYA)
            .attr("fill", leftArrowFill)
            d3.select("#left-arrow-textB")
                .attr("x", leftArrowTextX)
                .attr("y", leftArrowTextYB)
            .attr("fill", leftArrowFill)
        };

        function hideArrows(){ // done
            d3.select("#low-arrows")
            .attr("visibility", "hidden")
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
            
            changeBackgroundColor(coordinates.stepA.blackRight,coordinates.stepA.blackTop,
                coordinates.stepA.blackSize, coordinates.stepA.blackSize2
            );

            hideArrows()

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

            moveArrows(coordinates.arrowsB.generalBtnX, coordinates.arrowsB.generalBtnY, coordinates.arrowsB.generealBtnSize,
                coordinates.arrowsB.rightBtnX, coordinates.arrowsB.rightBtnY,
                coordinates.arrowsB.downBtnY,
                coordinates.arrowsB.leftBtnX, coordinates.arrowsB.leftBtnY, coordinates.arrowsB.delay,
                coordinates.arrowsB.topArrowRectangleX, coordinates.arrowsB.topArrowRectangleY,
                coordinates.arrowsB.topArrowTriangle, coordinates.arrowsB.topArrowTextX,
                coordinates.arrowsB.topArrowTextY, coordinates.arrowsB.topArrowFill,
                coordinates.arrowsB.rightArrowRectangleX, coordinates.arrowsB.rightArrowRectangleY,
                coordinates.arrowsB.rightArrowTriangle, coordinates.arrowsB.rightArrowTextX,
                coordinates.arrowsB.rightArrowTextYA,  coordinates.arrowsB.rightArrowTextYB, coordinates.arrowsB.rightArrowFill,
                coordinates.arrowsB.downArrowRectangleX, coordinates.arrowsB.downArrowRectangleY,
                coordinates.arrowsB.downArrowTriangle, coordinates.arrowsB.downArrowFill,
                coordinates.arrowsB.leftArrowRectangleX, coordinates.arrowsB.leftArrowRectangleY,
                coordinates.arrowsB.leftArrowTriangle, coordinates.arrowsB.leftArrowTextX,
                coordinates.arrowsB.leftArrowTextYA, coordinates.arrowsB.leftArrowTextYB, coordinates.arrowsB.leftArrowFill
            );

            changeBackgroundColor(coordinates.stepB.blackRight, coordinates.stepB.blackTop,
                coordinates.stepB.blackSize, coordinates.stepB.blackSize2
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

            moveArrows(coordinates.arrowsA.generalBtnX, coordinates.arrowsA.generalBtnY, coordinates.arrowsA.generealBtnSize,
                coordinates.arrowsA.rightBtnX, coordinates.arrowsA.rightBtnY,
                coordinates.arrowsA.downBtnY,
                coordinates.arrowsA.leftBtnX, coordinates.arrowsA.leftBtnY,  coordinates.arrowsA.delay,
                coordinates.arrowsA.topArrowRectangleX, coordinates.arrowsA.topArrowRectangleY,
                coordinates.arrowsA.topArrowTriangle, coordinates.arrowsA.topArrowTextX,
                coordinates.arrowsA.topArrowTextY, coordinates.arrowsA.topArrowFill,
                coordinates.arrowsA.rightArrowRectangleX, coordinates.arrowsA.rightArrowRectangleY,
                coordinates.arrowsA.rightArrowTriangle, coordinates.arrowsA.rightArrowTextX,
                coordinates.arrowsA.rightArrowTextYA,  coordinates.arrowsA.rightArrowTextYB, coordinates.arrowsA.rightArrowFill,
                coordinates.arrowsA.downArrowRectangleX, coordinates.arrowsA.downArrowRectangleY,
                coordinates.arrowsA.downArrowTriangle, coordinates.arrowsA.downArrowFill,
                coordinates.arrowsA.leftArrowRectangleX, coordinates.arrowsA.leftArrowRectangleY,
                coordinates.arrowsA.leftArrowTriangle, coordinates.arrowsA.leftArrowTextX,
                coordinates.arrowsA.leftArrowTextYA, coordinates.arrowsA.leftArrowTextYB, coordinates.arrowsA.leftArrowFill
            );

            changeBackgroundColor(coordinates.stepC.blackRight, coordinates.stepC.blackTop,
                coordinates.stepC.blackSize, coordinates.stepC.blackSize2
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

            hideArrows()

            changeBackgroundColor(coordinates.stepD.blackRight, coordinates.stepD.blackTop,
                coordinates.stepD.blackSize, coordinates.stepD.blackSize2
            );

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

            hideArrows()

            changeBackgroundColor(coordinates.stepE.blackRight, coordinates.stepE.blackTop,
                coordinates.stepE.blackSize, coordinates.stepE.blackSize2
            );

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

            hideArrows()

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
                        <div id="black-circle"></div>
                    </div>

                    <svg viewBox="0 0 500 300" id="steps" >
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

                        <g id="low-arrows">
                            <g>
                                <rect id="arrow-top" className="rectangle-arrows"></rect>
                                <rect id="arrow-right" className="rectangle-arrows"></rect>
                                <rect id="arrow-down" className="rectangle-arrows"></rect>
                                <rect id="arrow-left" className="rectangle-arrows"></rect>
                            </g>
                            <rect id="arrow-rectangle-top"></rect>
                            <polygon id="arrow-triangle-top"></polygon>
                            <text id="top-arrow-text" className="arrows-text">
                                {this.getLangText("topArrowText")}
                            </text>

                            <rect id="arrow-rectangle-right"></rect>
                            <polygon id="arrow-triangle-right"></polygon>
                            <text id="right-arrow-textA" className="arrows-text">
                                {this.getLangText("rightArrowTextA")}
                            </text>
                            <text id="right-arrow-textB" className="arrows-text">
                                {this.getLangText("rightArrowTextB")}
                            </text>

                            <rect id="arrow-rectangle-down"></rect>
                            <polygon id="arrow-triangle-down"></polygon>

                            <rect id="arrow-rectangle-left"></rect>
                            <polygon id="arrow-triangle-left"></polygon>
                            <text id="left-arrow-textA" className="arrows-text">
                            {this.getLangText("leftArrowTextA")}</text>
                            <text id="left-arrow-textB" className="arrows-text">
                                {this.getLangText("leftArrowTextB")}
                            </text>
                        </g>
                    </svg>

                </div>

            </div>
        );

    };

};