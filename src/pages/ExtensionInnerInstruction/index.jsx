import React, { Component } from "react";

import "./extensionInnerInstruction.scss";

// import innerInstruction from "../../assets/images/extension-inner-instruction/mainInnerInstruction.svg";

import topSteps from "../../assets/images/extension-inner-instruction/topStepsCircles.svg";
import step1 from "../../assets/images/extension-inner-instruction/step1.svg";
import step2 from "../../assets/images/extension-inner-instruction/step2.svg";
import step3 from "../../assets/images/extension-inner-instruction/step3.svg";
import step4 from "../../assets/images/extension-inner-instruction/step4.svg";

export default class ExtensionInnerInstruction extends Component {
    componentDidMount(){
        let main = document.getElementById("container_svg");

        main.addEventListener("load",function(){
            let svgDoc = main.contentDocument;

            let fisrtEllipse = svgDoc.getElementById("stepA");
            let secondEllipse = svgDoc.getElementById("stepB");
            let thirdEllipse = svgDoc.getElementById("stepC");
            let fourthEllipse = svgDoc.getElementById("stepD");

            let firstText = svgDoc.getElementById("stepAText");
            let secondText = svgDoc.getElementById("stepBText");
            let thirdText = svgDoc.getElementById("stepCText");
            let fourthText = svgDoc.getElementById("stepDText");

            function changeEllipseColor(ellipseChange, elA, elB, elC, step){
                return (
                    ellipseChange.style.fill = "url(#paint1_linear)",
                    elA.style.fill = "#C4C4C4",
                    elB.style.fill = "#C4C4C4",
                    elC.style.fill = "#C4C4C4",
                    main.data = step
                )
            };

            firstText.addEventListener("click", function(){
                changeEllipseColor(fisrtEllipse, secondEllipse, thirdEllipse, fourthEllipse, step1);
            }, false);

            secondText.addEventListener("click", function(){
                changeEllipseColor(secondEllipse, fisrtEllipse, thirdEllipse, fourthEllipse, step2);
            }, false);

            thirdText.addEventListener("click", function(){
                changeEllipseColor(thirdEllipse, fisrtEllipse, secondEllipse, fourthEllipse, step3);
            }, false);

            fourthText.addEventListener("click", function(){
                changeEllipseColor(fourthEllipse, fisrtEllipse, secondEllipse, thirdEllipse, step4);
            }, false);


            fisrtEllipse.addEventListener("click", function(){
                changeEllipseColor(fisrtEllipse, secondEllipse, thirdEllipse, fourthEllipse, step1);
            }, false);

            secondEllipse.addEventListener("click",function(){
                changeEllipseColor(secondEllipse, fisrtEllipse, thirdEllipse, fourthEllipse, step2);
            }, false);

            thirdEllipse.addEventListener("click",function(){
                changeEllipseColor(thirdEllipse, fisrtEllipse, secondEllipse, fourthEllipse, step3);
            }, false);

            fourthEllipse.addEventListener("click",function(){
                changeEllipseColor(fourthEllipse, fisrtEllipse, secondEllipse, thirdEllipse, step4);
            }, false);

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