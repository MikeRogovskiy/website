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

            svgDoc.getElementById("stepAText").style.userSelect = "none";
            svgDoc.getElementById("stepBText").style.userSelect = "none";
            svgDoc.getElementById("stepCText").style.userSelect = "none";
            svgDoc.getElementById("stepDText").style.userSelect = "none";

            function nextSlide(event){
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

            function previousSlide(event){
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

            rightArrowCircle.onclick = nextSlide(rightArrowCircle);
            rightArrow.onclick = nextSlide(rightArrow);

            leftArrowCircle.onclick = previousSlide(leftArrowCircle);
            leftArrow.onclick = previousSlide(leftArrow);

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