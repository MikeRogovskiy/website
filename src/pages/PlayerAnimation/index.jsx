import React, { Component } from "react";
import * as d3 from "d3";
import * as step from "./coordinates.jsx";
import ReactHtmlParser from "react-html-parser";

import "./playerAnimation.scss";

import backgroundA from "../../assets/images/player-animation/background-images/stepBackground1.png";
import backgroundB from "../../assets/images/player-animation/background-images/stepBackground2.png";
import backgroundС from "../../assets/images/player-animation/background-images/stepBackground3.png";
import backgroundD from "../../assets/images/player-animation/background-images/stepBackground4.png";
import backgroundE from "../../assets/images/player-animation/background-images/stepBackground5.png";
import backgroundF from "../../assets/images/player-animation/background-images/stepBackground6.png";
import backgroundG from "../../assets/images/player-animation/background-images/stepBackground7.png";
import backgroundH from "../../assets/images/player-animation/background-images/stepBackground8.png";

import leftArrow from "../../assets/images/player-animation/background-images/leftArrow.svg";
import rightArrow from "../../assets/images/player-animation/background-images/rightArrow.svg";

import smallArrowsA from "../../assets/images/player-animation/background-images/smallArrowsA.svg";
import smallArrowsB from "../../assets/images/player-animation/background-images/smallArrowsB.svg";


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
        let clicks = 0;

        function moveFigures(cxInner, cyInner, rInner, strokeWidthInner, delay,
            cxOuter, cyOuter, rOuter, strokeWidthOuter,
            blackRight, blackTop,
            blackSize, blackSize2, blackDelay,
            rectX, rectY, rectH, rectW,
            textRectXA, textRectYA, textRectXB, textRectYB, textRectXC, textRectYC,
            ){
                function circlesAction(){
                    const blackCircle = document.querySelector("#black-circle");
                    const circleInner = document.querySelector("#circleInner");
                    const circleOuter = document.querySelector("#circleOuter");

                    d3.select(circleInner)
                        .transition()
                        .on("start", hideBlackCircle)
                        .delay(delay)
                        .duration(1000)
                        .attr("cx", cxInner)
                        .attr("cy", cyInner)
                        .attr("r", rInner)
                        .attr("stroke-width", strokeWidthInner)
                    .on("end", showBlackCircle)

                    d3.select(circleOuter)
                        .transition()
                        .delay(delay)
                        .duration(1000)
                        .attr("cx", cxOuter)
                        .attr("cy", cyOuter)
                        .attr("r", rOuter)
                        .attr("stroke-width", strokeWidthOuter)
                    .on("end", moveBackgroundCircle)

                    function moveBackgroundCircle(){
                        blackCircle.style.backgroundImage = `radial-gradient(circle at  ` +
                            `right ${blackRight} top ${blackTop} , black ${blackSize}, transparent ${blackSize2})`;
                        blackCircle.style.animation = `smoothAppearBlackCircle ${blackDelay} ease-in`;
                    };

                    function hideBlackCircle(){
                        blackCircle.style.opacity = "0";
                    };

                    function showBlackCircle(){
                        blackCircle.style.opacity = "1";
                    };

                };
                circlesAction();

                function rectangleAction(){

                    d3.select("rect")
                        .transition()
                        .delay(delay)
                        .duration(2000)
                        .attr("x", rectX)
                        .attr("y", rectY)
                        .attr("height", rectH)
                    .attr("width", rectW)

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

                };
                rectangleAction();

        };

        function change(backgroundImage, textA, textB, textC){

            function changeBackground(){
                document.querySelector("#main-field_container").style.backgroundImage = `url(${backgroundImage})`;
            };
            changeBackground();

            function changeText(){
                d3.select("#textA")
                .text(textA)
                d3.select("#textB")
                .text(textB)
                d3.select("#textC")
                .text(textC)
            };
            changeText();

        };

        function addBigArrows(){
            d3.selectAll(".big-arrows")
            .attr("opacity", "1")

            function addBigLeftArrow(){
                d3.select("#big-arrow-left")
                    .attr("xlink:href", leftArrow)
                    .attr("height", "100")
                    .attr("width", "100")
                    .attr("x", "38%")
                .attr("y", "51%")
            };
            addBigLeftArrow()

            function addBigRightArrow(){
                d3.select("#big-arrow-right")
                    .attr("xlink:href", rightArrow)
                    .attr("height", "100")
                    .attr("width", "100")
                    .attr("x", "45.5%")
                .attr("y", "65%")
            };
            setTimeout(addBigRightArrow, 2000)
         
        };

        function removeBigArrows(){
            d3.selectAll(".big-arrows")
            .attr("opacity", "0")
        };

        function addSmallArrowsA(){
            d3.select("#small-arrows_a")
                .attr("opacity", "1")
                .attr("xlink:href", smallArrowsA)
                .attr("height", "150")
                .attr("width", "150")
                .attr("x", "44%")
            .attr("y", "26%")

            function removeSmallArrowsB(){
                d3.select("#small-arrows_b")
                .attr("opacity", "0")
            };
            removeSmallArrowsB()
        };

        function addSmallArrowsB(){
            d3.select("#small-arrows_b")
                .attr("opacity", "1")
                .attr("xlink:href", smallArrowsB)
                .attr("height", "150")
                .attr("width", "150")
                .attr("x", "46%")
            .attr("y", "29%")

            function removeSmallArrowsA(){
                d3.select("#small-arrows_a")
                .attr("opacity", "0")
            };
            removeSmallArrowsA()
        };

        function removeAllSmallArrows(){
            d3.selectAll(".small-arrows")
            .attr("opacity", "0")
        };

        function makeStep(coordinates, backgroundImage, textStepA, textStepB, textStepC){
            moveFigures(... Object.values(coordinates));
            change(backgroundImage, textStepA, textStepB, textStepC);
        };

        function action(){
            clicks += 1;
            switch(clicks){
                case 1:
                    makeStep(step.coordinatesA, backgroundA, textData.step1A, textData.step1B, textData.step1C);
                    break;
                case 2:
                    makeStep(step.coordinatesB, backgroundB, textData.step2A, textData.step2B, textData.step2C);
                    removeBigArrows();
                    break;
                case 3:
                    makeStep(step.coordinatesC, backgroundС, textData.step3A, textData.step3B, textData.step3C);
                    addBigArrows();
                    removeAllSmallArrows();
                    break;
                case 4:
                    makeStep(step.coordinatesD, backgroundE, textData.step4A, textData.step4B, textData.step4C);
                    removeBigArrows();
                    addSmallArrowsA();
                    break;
                case 5:
                    makeStep(step.coordinatesE, backgroundE, textData.step5A, textData.step5B, textData.step5C);
                    addSmallArrowsB();
                    break;
                case 6:
                    makeStep(step.coordinatesF, backgroundF, textData.step6A, textData.step6B, textData.step6C);
                    removeAllSmallArrows();
                    break;
                case 7:
                    makeStep(step.coordinatesG, backgroundG, textData.step7A, textData.step7B, textData.step7C);
                    break;
                case 8:
                    makeStep(step.coordinatesH, backgroundH, textData.step8A, textData.step8B, textData.step8C);
                    break;
                default:

            };

            window.addEventListener("keydown",
                function(event){
                    if(event.which === 39){
                        action()
                    }
                }
            )

        };


        return(
            <div id="main-field">

                <div id="main-field_container">

                    <div id="main-field_background">
                        <div id="black-circle"></div>
                    </div>

                    <svg viewBox="0 0 500 300" id="steps" onClick={action}>
                        <g id="circle-group">
                            <circle id="circleInner"  cx="87" cy="253" r="25" fill="none"
                                    strokeWidth="20" stroke="#6AB2F5" />

                            <circle id="circleOuter" cx="87" cy="253" r="50" fill="none"
                                    strokeWidth="40" stroke="#6AB2F5"  strokeOpacity="0.5" />
                        </g>

                        <g>
                            <rect id="rectangle" x="150" y="140" width="90" height="40"
                                    fill="white" stroke="#6AB2F5"  rx="2" />
                            <text id="textA" className="rectangle-text" x="160" y="155">
                                {this.getLangText("stepInitialA")}
                            </text>
                            <text id="textB" className="rectangle-text" x="164" y="168">
                                {this.getLangText("stepInitialB")}
                            </text>
                            <text id="textC" className="rectangle-text" x="0" y="0">
                                {this.getLangText("stepInitialC")}
                            </text>
                        </g>
                        
                        <g id="big-arrows">
                            <image id="big-arrow-left" className="big-arrows"></image>
                            <image id="big-arrow-right"className="big-arrows"></image>
                        </g>

                        <g id="low-arrows">
                            <image id="small-arrows_a" className="small-arrows"></image>
                            <image id="small-arrows_b"className="small-arrows"></image>
                        </g>
                    </svg>

                </div>

            </div>
        );

    };

};