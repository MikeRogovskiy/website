import React, { Component } from "react";

import "./extensionInnerInstruction.scss";

import step1 from "../../assets/images/extension-inner-instruction/step1.svg";
import step2 from "../../assets/images/extension-inner-instruction/step2.svg";
import step3 from "../../assets/images/extension-inner-instruction/step3.svg";
import step4 from "../../assets/images/extension-inner-instruction/step4.svg";

export default class ExtensionInnerInstruction extends Component {
    componentDidMount(){
        let main = document.getElementById("container_svg");

        var i = 1;
        main.addEventListener("load",function(){
            const svgDoc = main.contentDocument;

            const leftArrow = svgDoc.getElementById("left-arrow");
            const rightArrow = svgDoc.getElementById("right-arrow");
            const rightArrowCircle = svgDoc.getElementById("right-arrow-circle");
            const leftArrowCircle = svgDoc.getElementById("left-arrow-circle");

            const firstHeighCircle = svgDoc.getElementById("stepA");
            const secondHeighCircle = svgDoc.getElementById("stepB");
            const thirdHeighCircle = svgDoc.getElementById("stepC");
            const fourthHeighCircle = svgDoc.getElementById("stepD");

            const firstHeighText = svgDoc.getElementById("stepAText");
            const secondHeighText = svgDoc.getElementById("stepBText");
            const thirdHeighText =  svgDoc.getElementById("stepCText");
            const fourthHeighText = svgDoc.getElementById("stepDText");
            
            firstHeighText.style.userSelect = "none";
            secondHeighText.style.userSelect = "none";
            thirdHeighText.style.userSelect = "none";
            fourthHeighText.style.userSelect = "none";

            function nextSlideArrow(event){
                event.addEventListener("click", function(){
                    switch(i){
                        case 1:
                        i++
                        main.data = step2;
                        leftArrow.style.visibility = "hidden";
                        break;
                    case 2:
                        i++
                        main.data = step3;
                        break;
                    case 3:
                        i++
                        main.data = step4;
                        break;
                    }
                })
            };

            function previousSlideArrow(event){
                event.addEventListener("click", function(){
                    switch(i){
                        case 1:
                            main.data = step1;
                            break;
                        case 2:
                            i--
                            main.data = step1;
                            break;
                        case 3:
                            i--
                            main.data = step2;
                            break;
                        case 4:
                            i--
                            main.data = step3;
                            break;
                    }
                })
            };

            rightArrowCircle.onclick = nextSlideArrow(rightArrowCircle);
            rightArrow.onclick = nextSlideArrow(rightArrow);

            leftArrowCircle.onclick = previousSlideArrow(leftArrowCircle);
            leftArrow.onclick = previousSlideArrow(leftArrow);

            function makeStepCircles(event, step, changedIndex){
                event.addEventListener("click", function(){
                    main.data = step;
                    i = changedIndex;
                })
            };

            firstHeighCircle.onclick = makeStepCircles(firstHeighCircle, step1, 1);
            secondHeighCircle.onclick = makeStepCircles(secondHeighCircle, step2, 2);
            thirdHeighCircle.onclick = makeStepCircles(thirdHeighCircle, step3, 3);
            fourthHeighCircle.onclick = makeStepCircles(fourthHeighCircle, step4, 4);

            firstHeighText.onclick = makeStepCircles(firstHeighText, step1, 1);
            secondHeighText.onclick = makeStepCircles(secondHeighText, step2, 2);
            thirdHeighText.onclick = makeStepCircles(thirdHeighText, step3, 3);
            fourthHeighText.onclick = makeStepCircles(fourthHeighText, step4, 4);

        });
    }
    render(){

        return(
            <div id="inner-instruction-container">
                <object id="container_svg" type="image/svg+xml" data={step1}></object>
            </div>
        )
    }
}