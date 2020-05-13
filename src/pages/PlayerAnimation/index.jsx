import React, { Component } from "react";
import * as d3 from "d3";
// import coordinates from "./coordinates.json";
import ReactHtmlParser from "react-html-parser";

import "./playerAnimation.scss";

import backgroundA from "../../assets/images/player-animation/background-images/playerBackground2.svg";
import backgroundB from "../../assets/images/player-animation/background-images/playerBackground3.svg";
import backgroundСD from "../../assets/images/player-animation/background-images/playerBackground3.svg";
import backgroundEF from "../../assets/images/player-animation/background-images/playerBackground4.svg";
import backgroundG from "../../assets/images/player-animation/background-images/playerBackground5.svg";
import backgroundH from "../../assets/images/player-animation/background-images/playerBackground6.svg";
import backgroundI from "../../assets/images/player-animation/background-images/playerBackground7.svg";
// import leftArrow from "../../assets/images/player-animation/background-images/leftArrow";
// import rightArrow from "../../assets/images/player-animation/background-images/rightArrow";

function Coordinates(
    cxInner, cyInner, rInner, strokeWidthInner, delay,
    cxOuter, cyOuter, rOuter, strokeWidthOuter,
    blackRight, blackTop,
    blackSize, blackSize2, blackDelay,
    rectX, rectY, rectH, rectW,
    textRectXA, textRectYA, textRectXB, textRectYB, textRectXC, textRectYC,

    ){

    this.cxInner = cxInner;
    this.cyInner = cyInner;
    this.rInner = rInner;
    this.strokeWidthInner = strokeWidthInner;
    this.delay = delay;
    this.cxOuter = cxOuter;
    this.cyOuter = cyOuter;
    this.rOuter = rOuter;
    this.strokeWidthOuter = strokeWidthOuter;

    this.blackRight = blackRight;
    this.blackTop = blackTop;
    this.blackSize = blackSize;
    this.blackSize2 = blackSize2;
    this.blackDelay = blackDelay;

    this.rectX = rectX;
    this.rectY = rectY;
    this.rectH = rectH;
    this.rectW = rectW;

    this.textRectXA = textRectXA;
    this.textRectYA = textRectYA;
    this.textRectXB = textRectXB;
    this.textRectYB = textRectYB;
    this.textRectXC = textRectXC;
    this.textRectYC = textRectYC;

};

const coordinatesA = new Coordinates(
    "220", "190", "45", "10", "0",
    "220", "190", "50", "20",
    "56%", "63.5%", "12%", "2.5%", "2.5s",
    "220", "117", "23", "80",
    "230", "130", "230", "130", "230", "130",
);

const coordinatesB = new Coordinates(
    "340", "140", "85", "13", "0",
    "340",  "140", "90",  "23.5",
    "33%", "47%", "23%", "2.5%", "2.2s",
    "135", "65", "45", "150",
    "182", "77", "150", "89", "175", "99",
);

const coordinatesC = new Coordinates(
    "240", "250", "150", "20", "0",
    "240",  "250", "170",  "23.5",
    "52%", "85%", "40%", "2.5%", "2.3s",
    "135", "65", "45", "150",
    "182", "77", "150", "89", "175", "99",
);

const coordinatesD = new Coordinates(
    "450", "190", "50", "7", "0",
    "450",  "190", "55",  "10",
    "10%", "63%", "10%", "2.5%", "2.4s",
    "220", "50", "40", "190",
    "230", "70", "250", "80", "230", "70",
);

const coordinatesE = new Coordinates(
    "330", "235", "30", "5", "0",
    "330", "235", "35", "10",
    "34.2%", "78%", "7%", "2.5%", "2.5s",
    "250", "80", "25", "130",
    "260", "95", "40", "105", "260", "95",
);

const coordinatesF = new Coordinates(
    "221", "230", "21", "10", "0",
    "221", "230", "31", "15",
    "55%", "76%", "5.5%", "2.5%", "2.5s",
    "155", "150", "30", "130",
    "172", "163", "162", "173", "172", "163",
);

const coordinatesG = new Coordinates(
    "272", "212", "20", "10", "0",
    "272", "212", "30", "15",
    "46%", "70.5%", "5%", "2.5%", "2.5s",
    "190", "120", "35", "90",
    "205", "135", "202", "145", "202", "155",
);

const coordinatesH = new Coordinates(
    "272", "212", "70", "10", "0",
    "272", "212", "80", "15",
    "46%", "70.5%", "21%", "2.5%", "2s",
    "190", "120", "35", "90",
    "205", "135", "202", "145", "202", "155",
);


export default class PlayerAnimation extends Component {

    componentDidMount() {
        document.querySelector("#black-circle").style.backgroundImage = "radial-gradient(circle at  " +
            "right 82.5% top 84% , black 3%, transparent 2.5%)";

    };

    getLangText(text) {
        return ReactHtmlParser(this.props.text[text]);
    };

    render(){
        const textData = this.props.text;

        function move(cxInner, cyInner, rInner, strokeWidthInner, delay,
            cxOuter, cyOuter, rOuter, strokeWidthOuter,
            blackRight, blackTop,
            blackSize, blackSize2, blackDelay,
            rectX, rectY, rectH, rectW,
            textRectXA, textRectYA, textRectXB, textRectYB, textRectXC, textRectYC,

            ){
                function moveCircle(){

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
                moveCircle();

                function moveRectangle(){

                    d3.select("rect")
                        .transition()
                        .delay(delay)
                        .duration(2000)
                        .attr("x", rectX)
                        .attr("y", rectY)
                        .attr("height", rectH)
                    .attr("width", rectW)

                };
                moveRectangle();

                function moveText(){
        
                    d3.select("#textA")
                        .transition()
                        .delay(delay)
                        .duration(2000)
                        .attr("x", textRectXA)
                    .attr("y", textRectYA)
                    d3.select("#textB")
                        .transition()
                        .delay(delay)
                        .duration(2000)
                        .attr("x", textRectXB)
                    .attr("y", textRectYB)
                    d3.select("#textC")
                        .transition()
                        .delay(delay)
                        .duration(2000)
                        .attr("x", textRectXC)
                    .attr("y", textRectYC)

                };
                moveText()

                function changeBackgroundColor(){

                    const blackCircle = document.querySelector("#black-circle");

                    blackCircle.style.backgroundImage = `radial-gradient(circle at  ` +
                        `right ${blackRight} top ${blackTop} , black ${blackSize}, transparent ${blackSize2})`;

                    blackCircle.style.animation = `smoothAppearBlackCircle ${blackDelay} ease-in`;

                    function stopAnimation(){
                        blackCircle.style.animation = "none";
                    };
                    setTimeout(stopAnimation, 3000)

                };
                changeBackgroundColor();

        };

        function changeBackground(backgroundImage){
            document.querySelector("#main-field_container").style.backgroundImage = `url(${backgroundImage})`;
        };

        function changeText(textA, textB, textC){
            d3.select("#textA")
            .text(textA)
            d3.select("#textB")
            .text(textB)
            d3.select("#textC")
            .text(textC)
        };

        

        function hideArrows(){ // done
            d3.select("#low-arrows")
            .attr("visibility", "hidden")
        };

        function stepA(){
            move(... Object.values(coordinatesA));
            changeText(textData.step1A, textData.step1B, textData.step1C);
            hideArrows();
            setTimeout(changeBackground(backgroundA), 300);
        };

        function stepB(){
            move(... Object.values(coordinatesB));
            changeText(textData.step2A, textData.step2B, textData.step2C);
            hideArrows();
            setTimeout(changeBackground(backgroundB), 300);
        };

        function stepC(){
            move(... Object.values(coordinatesC));
            changeText(textData.step3A, textData.step3B, textData.step3C);
            hideArrows();
            setTimeout(changeBackground(backgroundСD), 300);
        };

        function stepD(){
            move(... Object.values(coordinatesD));
            changeText(textData.step4A, textData.step4B, textData.step4C);
            hideArrows();
            setTimeout(changeBackground(backgroundEF), 300);
        };

        function stepE(){
            move(... Object.values(coordinatesE));
            changeText(textData.step5A, textData.step5B, textData.step5C);
            hideArrows();
            setTimeout(changeBackground(backgroundEF), 300);
        };

        function stepF(){
            move(... Object.values(coordinatesF));
            changeText(textData.step6A, textData.step6B, textData.step6C);
            hideArrows();
            setTimeout(changeBackground(backgroundG), 300);
        };

        function stepG(){
            move(... Object.values(coordinatesG));
            changeText(textData.step7A, textData.step7B, textData.step7C);
            hideArrows();
            setTimeout(changeBackground(backgroundH), 300);
        };

        function stepH(){
            move(... Object.values(coordinatesH));
            changeText(textData.step7A, textData.step7B, textData.step7C);
            hideArrows();
            setTimeout(changeBackground(backgroundI), 300);
        };




        // function moveArrows(generalBtnX, generalBtnY, generealBtnSize, // done
        //     rightBtnX, rightBtnY,
        //     downBtnY,
        //     leftBtnX, leftBtnY,

        //     delay,

        //     topArrowRectangleX, topArrowRectangleY, topArrowTriangle, topArrowTextX, topArrowTextY, topArrowFill,
        //     rightArrowRectangleX, rightArrowRectangleY, rightArrowTriangle, rightArrowTextX, rightArrowTextYA, rightArrowTextYB, rightArrowFill,
        //     downArrowRectangleX, downArrowRectangleY, downArrowTriangle, downArrowFill,
        //     leftArrowRectangleX, leftArrowRectangleY, leftArrowTriangle, leftArrowTextX, leftArrowTextYA, leftArrowTextYB, leftArrowFill
        //     ){
        //     d3.select("#low-arrows")
        //     .attr("visibility", "visible")

        //     d3.selectAll(".rectangle-arrows")
        //         .attr("x", generalBtnX)
        //         .attr("y", generalBtnY)
        //         .attr("width", generealBtnSize)
        //         .attr("height", generealBtnSize)
        //         .attr("stroke-width", "0.2")
        //         .attr("fill", "none")
        //     .attr("rx", "5")

        //     d3.select("#arrow-top")
        //     .attr("stroke", topArrowFill)
        //     d3.select("#arrow-right")
        //         .attr("x", rightBtnX)
        //         .attr("y", rightBtnY)
        //     .attr("stroke", rightArrowFill)
        //     d3.select("#arrow-down")
        //         .attr("y", downBtnY)
        //     .attr("stroke", downArrowFill)
        //     d3.select("#arrow-left")
        //         .attr("x", leftBtnX)
        //         .attr("y", leftBtnY)
        //     .attr("stroke", leftArrowFill)

        //     d3.select("#arrow-rectangle-top")
        //         .attr("x", topArrowRectangleX)
        //         .attr("y", topArrowRectangleY)
        //         .attr("width", "1")
        //         .attr("height", "5")
        //     .attr("fill", topArrowFill)
        //     d3.select("#arrow-triangle-top")
        //         .attr("points", topArrowTriangle)
        //     .attr("fill", topArrowFill)
        //     d3.select("#top-arrow-text")
        //         .attr("x", topArrowTextX)
        //         .attr("y", topArrowTextY)
        //     .attr("fill", topArrowFill)

        //     d3.select("#arrow-rectangle-right")
        //         .attr("x", rightArrowRectangleX)
        //         .attr("y", rightArrowRectangleY)
        //         .attr("width", "5")
        //         .attr("height", "1")
        //     .attr("fill", rightArrowFill)
        //     d3.select("#arrow-triangle-right")
        //         .attr("points", rightArrowTriangle)
        //     .attr("fill", rightArrowFill)

        //     d3.select("#right-arrow-textA")
        //         .attr("x", rightArrowTextX)
        //         .attr("y", rightArrowTextYA)
        //     .attr("fill", rightArrowFill)
        //     d3.select("#right-arrow-textB")
        //         .attr("x", rightArrowTextX)
        //         .attr("y", rightArrowTextYB)
        //     .attr("fill", rightArrowFill)


        //     d3.select("#arrow-rectangle-down")
        //         .attr("x", downArrowRectangleX)
        //         .attr("y", downArrowRectangleY)
        //         .attr("width", "1")
        //         .attr("height", "5")
        //     .attr("fill", downArrowFill)
        //     d3.select("#arrow-triangle-down")
        //         .attr("points", downArrowTriangle)
        //     .attr("fill", downArrowFill)

        //     d3.select("#arrow-rectangle-left")
        //         .attr("x", leftArrowRectangleX)
        //         .attr("y", leftArrowRectangleY)
        //         .attr("width", "5")
        //         .attr("height", "1")
        //     .attr("fill", leftArrowFill)
        //     d3.select("#arrow-triangle-left")
        //         .attr("points", leftArrowTriangle)
        //     .attr("fill", leftArrowFill)

        //     d3.select("#left-arrow-textA")
        //         .attr("x", leftArrowTextX)
        //         .attr("y", leftArrowTextYA)
        //     .attr("fill", leftArrowFill)
        //     d3.select("#left-arrow-textB")
        //         .attr("x", leftArrowTextX)
        //         .attr("y", leftArrowTextYB)
        //     .attr("fill", leftArrowFill)
        // };

        return(
            <div id="main-field">

                <div id="btn-folder">
                    <button className="test-btn" onClick={stepA}>StepA</button>
                    <button className="test-btn" onClick={stepB}>StepB</button>
                    <button className="test-btn" onClick={stepC}>StepC</button>
                    <button className="test-btn" onClick={stepD}>StepD</button>
                    <button className="test-btn" onClick={stepE}>StepE</button>
                    <button className="test-btn" onClick={stepF}>StepF</button>
                    <button className="test-btn" onClick={stepG}>StepG</button>
                    <button className="test-btn" onClick={stepH}>StepH</button>
                </div>

                <div id="main-field_container">

                    <div id="main-field_background">
                        <div id="black-circle"></div>
                    </div>

                    <svg viewBox="0 0 500 300" id="steps" >
                        <g id="circle-group">
                            <circle id="circleInner"  cx="87" cy="253" r="25" fill="none"
                                    strokeWidth="20" stroke="#6AB2F5" />

                            <circle id="circleOuter" cx="87" cy="253" r="50" fill="none"
                                    strokeWidth="40" stroke="#6AB2F5"  strokeOpacity="0.5" />
                        </g>

                        <g>
                            <rect id="rectangle" x="150" y="140" width="90" height="40"
                                    fill="white" stroke="#6AB2F5"  rx="2" />
                            <text id="textA" className="rectangle-text" x="170" y="155">
                                {this.getLangText("stepInitialA")}
                            </text>
                            <text id="textB" className="rectangle-text" x="165" y="168">
                                {this.getLangText("stepInitialB")}
                            </text>
                            <text id="textC" className="rectangle-text" x="0" y="0">
                                {this.getLangText("stepInitialC")}
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