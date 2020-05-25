import React, { Component } from "react";
import "./homeB.scss";

import step1 from "../../assets/images/test/step1Test.png";
import step2 from "../../assets/images/test/step2Test.png";
import step3 from "../../assets/images/test/step3Test.png";
import step4 from "../../assets/images/test/step4Test.png";
import step5 from "../../assets/images/test/step5Test.png";
import step6 from "../../assets/images/test/step6Test.png";
import step7 from "../../assets/images/test/step7Test.png";

import backgroundForTest1 from "../../assets/images/test/testMainPageA.svg";
import backgroundForTest2 from "../../assets/images/test/testMainPageB.svg";


export default class HomeB extends Component {

    componentDidMount(){
        if (window.location.href.includes("B")){
            document.querySelector("#homeB-container_page").style.backgroundImage = `url(${backgroundForTest1})`;
        }
        if (window.location.href.includes("C")){
            document.querySelector("#homeB-container_page").style.backgroundImage = `url(${backgroundForTest2})`;
        }

    }
     
    render(){

        function changeStep(step){
            let stepPlace = document.querySelector("#step-img");
            stepPlace.src = step;

        };
        var clicks = 0;

        function action(value){

            var sum = clicks + value;
            if (sum >= 0 && sum < 10) {
                clicks = sum;
            };


            switch(clicks){
                case 0:
                    changeStep(step1)
                    break
                case 1:
                    changeStep(step2)
                    break;
                case 2:
                    changeStep(step3)
                    break;
                case 3:
                    changeStep(step4)
                    break;
                case 4:
                    changeStep(step5)
                    break;
                case 5:
                    changeStep(step6)
                    break;
                case 6:
                    changeStep(step7)
                    break;
                default:

            };

        };
        return (
            <div id="homeB-container">
                <div id="homeB-container_page">
                     <div className="container_page_btn">
                        <button id="button-height" className="start-test-button">НАЧАТЬ БЕСПЛАТНО</button>
                        <div id="container_page_steps">
                            <button id="make-step" onClick={() => {action(1)}}>Следующий шаг</button>
                            <img id="step-img" src={step1}></img>
                        </div>
                        <button id="button-low" className="start-test-button">НАЧАТЬ БЕСПЛАТНО</button>
                    </div>
                </div>
            </div>
        )
    }
}