import React, { Component } from "react";
import * as d3 from "d3";
import * as step from "./coordinates.jsx";
import ReactHtmlParser from "react-html-parser";

import "./playerAnimation.scss";
import "./playerAnimationMedia.scss";

import initialBackground from "../../assets/images/player-animation/background-images/initialBackground.png";

import backgroundA from "../../assets/images/player-animation/background-images/stepBackground1.png";
import backgroundB from "../../assets/images/player-animation/background-images/stepBackground2.png";
import backgroundС from "../../assets/images/player-animation/background-images/stepBackground6.png";

import backgroundD from "../../assets/images/player-animation/background-images/stepBackground6.png";

import backgroundE from "../../assets/images/player-animation/background-images/stepBackground6.png";
import backgroundF from "../../assets/images/player-animation/background-images/testi.png";
import backgroundG from "../../assets/images/player-animation/background-images/stepBackground8.png";
import backgroundH from "../../assets/images/player-animation/background-images/stepBackground9.png";

// import backgroundI from "../../assets/images/player-animation/background-images/stepBackground8.png";
import backgroundFinal from "../../assets/images/player-animation/background-images/finalBackground.png";

import leftArrow from "../../assets/images/player-animation/arrow-images/leftArrow.svg";
import rightArrow from "../../assets/images/player-animation/arrow-images/rightArrow.svg";

import smallArrowsA from "../../assets/images/player-animation/arrow-images/smallArrowsA.svg";
import smallArrowsB from "../../assets/images/player-animation/arrow-images/smallArrowsB.svg";

import instruction from "../../assets/images/player-animation/step-images/instructionArrows.svg";



export default class PlayerAnimation extends Component {

    componentDidMount(){
        document.querySelector("#main-field_container").style.backgroundImage = `url(${initialBackground})`;
        document.querySelector("#black-circle").style.backgroundImage = "radial-gradient(circle at  " +
            "right 82.5% top 84% , black 3%, transparent 2.5%)";
        document.querySelector("#black-circle").style.opacity = "0";
        document.querySelector("#main-field_container_background").style.opacity = "0"

        d3.select("#instruction-image")
            .attr("x", "44%")
            .attr("y", "6%")
            .attr("height", "11%")
            .attr("width", "45%")
            .attr("visibility", "visible")
        .attr("xlink:href", instruction);
        document.querySelector("body").style.overflow = "hidden"
    };

    getLangText(text){
        return ReactHtmlParser(this.props.text[text]);
    };

    render(){

        function moveFigures(cxInner, cyInner, rInner, strokeWidthInner, delay,
            cxOuter, cyOuter, rOuter, strokeWidthOuter,
            blackRight, blackTop,
            blackSize, blackSize2, blackDelay,
            rectX, rectY, rectH, rectW,
            textRectXA, textRectYA, textRectXB, textRectYB, textRectXC, textRectYC,
            ){
                function circlesActions(){
                    const blackCircle = document.querySelector("#black-circle");
                    const circleInner = document.querySelector("#circleInner");
                    const circleOuter = document.querySelector("#circleOuter");

                    function hideBlackCircle(){
                        blackCircle.style.opacity = "0";
                    };

                    function showBlackCircle(){
                        blackCircle.style.opacity = "1";
                    };

                    function transformCircles(circleType, cx, cy, r, strokeWidth){
                        d3.select(circleType)
                            .transition()
                            .on("start", hideBlackCircle)
                            .delay(delay)
                            .duration(1000)
                            .attr("cx", cx)
                            .attr("cy", cy)
                            .attr("r", r)
                            .attr("stroke-width", strokeWidth)
                        .on("end", moveBackgroundCircle);
                    };
                    transformCircles(circleInner, cxInner, cyInner, rInner, strokeWidthInner);
                    transformCircles(circleOuter, cxOuter, cyOuter, rOuter, strokeWidthOuter);

                    function moveBackgroundCircle(){

                        hideBlackCircle();

                        blackCircle.style.backgroundImage = `radial-gradient(circle at  ` +
                            `right ${blackRight} top ${blackTop} , black ${blackSize}, transparent ${blackSize2})`;
                        blackCircle.style.animation = `smoothAppear ${blackDelay} ease-in`;

                        showBlackCircle();
                    };

                };
                circlesActions();

                function rectangleAction(){
                    d3.select("rect")
                        .transition()
                        .delay(delay)
                        .duration(2000)
                        .attr("x", rectX)
                        .attr("y", rectY)
                        .attr("height", rectH)
                    .attr("width", rectW);

                    function moveText(textType, textX, textY){
                        d3.select(textType)
                            .transition()
                            .delay(delay)
                            .duration(2000)
                            .attr("x", textX)
                        .attr("y", textY);
                    };
                    moveText("#rectangle-textA", textRectXA, textRectYA);
                    moveText("#rectangle-textB", textRectXB, textRectYB);
                    moveText("#rectangle-textC", textRectXC, textRectYC);

                };
                rectangleAction();

        };

        function change(backgroundImage, textA, textB, textC){

            function changeBackground(){
                document.querySelector("#main-field_container").style.backgroundImage = `url(${backgroundImage})`;
            };
            changeBackground();

            function changeText(textType, textContent){
                d3.select(textType)
                .text(textContent);
            };
            changeText("#rectangle-textA", textA);
            changeText("#rectangle-textB", textB);
            changeText("#rectangle-textC", textC);

        };

        function addBigArrows(){
            d3.selectAll(".big-arrows")
            .attr("opacity", "1")

            function createBigArrow(arrowType, arrowImage, x, y){
                d3.select(arrowType)
                    .attr("xlink:href", arrowImage)
                    .attr("height", "420")
                    .attr("width", "420")
                    .attr("x", x)
                .attr("y", y);
            };
            createBigArrow("#big-arrow-left", leftArrow, "37%", "50%");
            setTimeout(function() { createBigArrow("#big-arrow-right", rightArrow, "44.5%", "65%");}, 2000);
        };

        function removeBigArrows(){
            d3.selectAll(".big-arrows")
            .attr("opacity", "0");
        };

        function addSmallArrows(arrowsTypeA, arrowsTypeB, arrowsImage, x, y){
            d3.select(arrowsTypeA)
                .attr("opacity", "1")
                .attr("xlink:href", arrowsImage)
                .attr("height", "550")
                .attr("width", "550")
                .attr("x", x)
            .attr("y", y);

            function removeSmallArrowsA(){
                d3.select(arrowsTypeB)
                .attr("opacity", "0");
            };
            removeSmallArrowsA();
        };


        function removeAllSmallArrows(){
            d3.selectAll(".small-arrows")
            .attr("opacity", "0");
        };

        function makeStep(coordinates, backgroundImage, textStepA, textStepB, textStepC){

            moveFigures(... Object.values(coordinates));

            change(backgroundImage, textStepA, textStepB, textStepC);

        };

        function hideContentOf(typeOfContent){
            d3.select(typeOfContent)
            .attr("visibility", "hidden");
        }

        function appearContentOf(typeOfContent){
            d3.select(typeOfContent)
            .attr("visibility", "visible");
        }

        function changeTextColorOn(color){
            d3.selectAll(".rectangle-text")
            .attr("fill", color)
        };

        window.addEventListener("keydown",
            function(event){
                if(event.which === 39){
                    action(1);
                } else if (event.which === 37){
                    action(-1);
                };
            }
        );

        function changeInitialStepOpacity(num){
            document.querySelector("#steps-svg-field_circle-group").style.opacity = num;
            document.querySelector("#steps-svg-field_start").style.opacity = num;
            document.querySelector("#steps-svg-field_rectangle-group").style.opacity = num;
        };
        
        function changeInitialTextOpacity(num){
            document.querySelector("#steps-svg-field_start").style.opacity = num;
        };

        function changeBackgroundFadeVisibility(num){
            document.querySelector("#main-field_container_background").style.opacity = num;
        };

        const textData = this.props.text;

        var clicks = 0;

        function action(value){

            var sum = clicks + value;
            if (sum >= 0 && sum < 10) {
                clicks = sum;
                window.parent.postMessage(
                    {
                      step: clicks
                    },
                    "*"
                  );
            };

            switch(clicks){
                case 0:
                    changeInitialStepOpacity("0");
                    changeBackgroundFadeVisibility("0");
                    changeInitialTextOpacity("1");

                    makeStep(step.coordinatesInitial, initialBackground, textData.stepInitialA, textData.stepInitialB, textData.stepInitialC);
                    break
                case 1:
                    changeInitialStepOpacity("1");
                    changeBackgroundFadeVisibility("0.5");
                    changeInitialTextOpacity("0");

                    makeStep(step.coordinatesInitial, backgroundA, textData.step1A, textData.step1B, textData.step1C);
                    break
                case 2:
                    appearContentOf(document.querySelector("#steps-svg-field_instruction-group"));
                    appearContentOf(document.querySelector("#instruction-image"));
                    makeStep(step.coordinatesA, backgroundB, textData.step2A, textData.step2B, textData.step2C);
                    break;
                case 3:
                    hideContentOf(document.querySelector("#steps-svg-field_instruction-group"));
                    hideContentOf(document.querySelector("#instruction-image"));
                    makeStep(step.coordinatesB, backgroundС, textData.step3A, textData.step3B, textData.step3C);
                    removeBigArrows();
                    break;
                case 4:
                    makeStep(step.coordinatesC, backgroundD, textData.step4A, textData.step4B, textData.step4C);
                    addBigArrows();
                    removeAllSmallArrows();
                    break;
                case 5:
                    makeStep(step.coordinatesD, backgroundE, textData.step5A, textData.step5B, textData.step5C);
                    removeBigArrows();
                    addSmallArrows("#small-arrows_a", "#small-arrows_b", smallArrowsA, "44%", "26%")
                    break;
                case 6:
                    makeStep(step.coordinatesE, backgroundF, textData.step6A, textData.step6B, textData.step6C);
                    removeAllSmallArrows();
                    // addSmallArrows("#small-arrows_b", "#small-arrows_a", smallArrowsB, "46%", "23.5%")
                    break;
                case 7:
                    makeStep(step.coordinatesF, backgroundG, textData.step7A, textData.step7B, textData.step7C);
                    removeAllSmallArrows();
                    break;
                // case 8:
                //     makeStep(step.coordinatesG, backgroundH, textData.step8A, textData.step8B, textData.step8C);
                //     break;
                case 8:
                    changeTextColorOn("black")
                    makeStep(step.coordinatesG, backgroundH, textData.step8A, textData.step8B, textData.step8C);
                    break;
                case 9:
                    changeTextColorOn("white")
                    makeStep(step.coordinatesFinal, backgroundFinal, textData.stepFinalA, textData.stepFinalB, textData.stepFinalC);
                default:

            };

        };

        return(
            <div id="main-field">

                <div id="main-field_container">

                    <div id="main-field_container_background" >
                        <div id="black-circle" ></div>
                    </div>

                    <svg  viewBox="0 0 1980 1080" id="steps-svg-field" onClick={() => action(1)}>
                        <g id="steps-svg-field_circle-group" opacity="0">
                            <circle id="circleInner"  cx="17.5%" cy="84%" r="5.5%" fill="none"
                                    strokeWidth="4%" stroke="#6AB2F5" />

                            <circle id="circleOuter" cx="17.5%" cy="84%" r="10%" fill="none"
                                    strokeWidth="10%" stroke="#6AB2F5"  strokeOpacity="0.5" />
                        </g>

                        <g id="steps-svg-field_rectangle-group" opacity="0">
                            <rect id="rectangle-container" x="30%" y="50%" width="18%" height="13%"
                                    fill="white" stroke="#6AB2F5"  rx="5" strokeWidth="0.3%" />
                            <text id="rectangle-textA" className="rectangle-text" x="39%" y="55%" textAnchor="middle">
                                {this.getLangText("stepInitialA")}
                            </text>
                            <text id="rectangle-textB" className="rectangle-text" x="39%" y="60%" textAnchor="middle">
                                {this.getLangText("stepInitialB")}
                            </text>
                            <text id="rectangle-textC" className="rectangle-text" x="0" y="0" textAnchor="middle">
                                {this.getLangText("stepInitialC")}
                            </text>
                        </g>

                        {/* <g id="steps-svg-field_instruction-group">
                            <image id="instruction-image"></image>
                            <rect width="45%" height="14%" x="30%" y="5%" rx="10px" fill=" rgba(0, 0, 0, 0.3)"></rect>
                            <text x="45%" y="13%" textAnchor="middle" fontSize="30px" fill="white">
                                {this.getLangText("stepInitialInstruction")}
                            </text>
                        </g> */}

                        <g id="steps-svg-field_start" >
                            <text x="50%" y="43%" textAnchor="middle" fill="white" fontSize="45px">
                                {this.getLangText("stepInitialA")}
                            </text>
                            <text x="51%" y="49%" textAnchor="middle" fill="white" fontSize="45px">
                                {this.getLangText("stepInitialB")}
                            </text>
                            <text x="45%" y="22%" textAnchor="middle" fill="white" fontSize="45px">
                                {this.getLangText("stepInitialC")}
                            </text>
                        </g>

                        {/* <g id="steps-svg-field_big-arrows">
                            <image id="big-arrow-left" className="big-arrows"></image>
                            <image id="big-arrow-right"className="big-arrows"></image>
                        </g> */}

                        <g id="steps-svg-field_low-arrows">
                            <image id="small-arrows_a" className="small-arrows"></image>
                            <image id="small-arrows_b"className="small-arrows"></image>
                        </g>
                    </svg>

                </div>

            </div>
        );

    };

};