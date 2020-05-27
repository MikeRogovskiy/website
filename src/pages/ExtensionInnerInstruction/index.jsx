import React, { Component } from "react";

import "./extensionInnerInstruction.scss";

import step1 from "../../assets/images/extension-inner-instruction/step1.svg";
import step2 from "../../assets/images/extension-inner-instruction/step2.svg";
import step3 from "../../assets/images/extension-inner-instruction/step3.svg";
import step4 from "../../assets/images/extension-inner-instruction/step4.svg";

export default class ExtensionInnerInstruction extends Component {
    componentDidMount(){
        let main = document.getElementById("container_svg");
        const stepsArray = [step1,step2,step3,step4];
        
        var i = 1;
        main.addEventListener("load",function(){
            let svgDoc = main.contentDocument;

            let leftArrow = svgDoc.getElementById("left-arrow");
            let rightArrow = svgDoc.getElementById("right-arrow");

            function changeSVG(step){
                main.data = step
            };

            function makeAMove(step){

                rightArrow.addEventListener("click", function(){
                    if(i < 3){
                        i++;
                    }
                    changeSVG(step);
                }, false);

                leftArrow.addEventListener("click", function(){
                    if(i > 0){
                        --i;
                    }
                    changeSVG(step);

                }, false);
                console.log(i)

            };

            makeAMove( stepsArray[i]);

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