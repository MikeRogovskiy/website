import React, { Component } from "react";
import * as d3 from "d3";
import "./homeB.scss";

import step1 from "../../assets/images/test/step1Test.png";
import step2 from "../../assets/images/test/step2Test.png";
import step3 from "../../assets/images/test/step3Test.png";
import step4 from "../../assets/images/test/step4Test.png";
import step5 from "../../assets/images/test/step5Test.png";
import step6 from "../../assets/images/test/step6Test.png";
import step7 from "../../assets/images/test/step7Test.png";

import nextBtn from "../../assets/images/test/orangeNextStepBtn.svg";

// import backgroundForTest1 from "../../assets/images/test/testMainPageA.svg";
import backgroundForTest1 from "../../assets/images/test/testA.svg";
import backgroundForTest2 from "../../assets/images/test/testMainPageB.svg";


export default class HomeB extends Component {
    componentDidMount(){
        var main = document.getElementById("svgObject");

        main.addEventListener("load",function(){
            var svgDoc = main.contentDocument;
            var startBtn = svgDoc.getElementById("start-btn-test");
                // nextStepBtn
                //step1 ... 7
            startBtn.addEventListener("click",function(){
                    // alert('hello world!')
                    document.location="https://easylang.app/player"
            }, false);
        }, false);
    }
 
    render(){

        // function changeStep(step){
        //     let stepPlace = document.querySelector("#step-img");
        //     stepPlace.src = step;

        // };
        // var clicks = 0;

        // function action(value){

        //     var sum = clicks + value;
        //     if (sum >= 0 && sum < 10) {
        //         clicks = sum;
        //     };


        //     switch(clicks){
        //         case 0:
        //             changeStep(step1)
        //             break
        //         case 1:
        //             changeStep(step2)
        //             break;
        //         case 2:
        //             changeStep(step3)
        //             break;
        //         case 3:
        //             changeStep(step4)
        //             break;
        //         case 4:
        //             changeStep(step5)
        //             break;
        //         case 5:
        //             changeStep(step6)
        //             break;
        //         case 6:
        //             changeStep(step7)
        //             break;
        //         default:

        //     };

        return (
            <object id="svgObject"  type="image/svg+xml" data={backgroundForTest1} />
        )
    }
}