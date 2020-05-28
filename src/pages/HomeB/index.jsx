import React, { Component } from "react";
import * as d3 from "d3";
import "./homeB.scss";

import step1 from "../../assets/images/test/step1Test.svg";
import step2 from "../../assets/images/test/step2Test.svg";
import step3 from "../../assets/images/test/step3Test.svg";
import step4 from "../../assets/images/test/step4Test.svg";
import step5 from "../../assets/images/test/step5Test.svg";
import step6 from "../../assets/images/test/step6Test.svg";
// import step7 from "../../assets/images/test/step7Test.png";

import nextBtn from "../../assets/images/test/orangeNextStepBtn.svg";

// import backgroundForTest1 from "../../assets/images/test/testMainPageA.svg";
import backgroundForTest1 from "../../assets/images/test/testA.svg";
import backgroundForTest2 from "../../assets/images/test/testMainPageB.svg";


export default class HomeB extends Component {
    componentDidMount(){
        const main = document.getElementById("svgObject");
        const extensionLink = "https://chrome.google.com/webstore/detail/easylangapp-beta/cgelaojeiipaehoiiabkbickcpmpanel";
        const blogLink = "https://easylang.app/blog";
        const readNLearnLink = "https://easylang.app/extension";
        const watchNLearnLink = "https://easylang.app/player";

        var i = 1;

        main.addEventListener("load",function(){
            const svgDoc = main.contentDocument;
            let placeForStep = svgDoc.getElementById("step-place");

            // placeForStep.style.visibility = "hidden";
        

            const startBtnNav = svgDoc.getElementById("start-btn-test-nav");
            const startBtnHeigh = svgDoc.getElementById("start-btn-test-heigh");
            const startBtnLow = svgDoc.getElementById("start-btn-test-low");

            const blog = svgDoc.getElementById("blog")
            const readNLearn = svgDoc.getElementById("read-n-learn");
            const watchNLearn = svgDoc.getElementById("watch-n-learn");

            const nextStepMain = svgDoc.getElementById("nextStepBtn");

            const place = svgDoc.getElementById("stepObject");
                //step1 ... 7

            startBtnNav.addEventListener("click",function(){
                document.location = extensionLink;
            }, false);

            startBtnHeigh.addEventListener("click",function(){
                document.location = extensionLink;
            }, false);

            startBtnLow.addEventListener("click",function(){
                document.location = extensionLink;
            }, false);

            blog.addEventListener("click",function(){
                document.location = blogLink;
            }, false);

            readNLearn.addEventListener("click",function(){
                document.location = readNLearnLink;
            }, false);

            watchNLearn.addEventListener("click",function(){
                document.location = watchNLearnLink;
            }, false);

            function nextSlideMain(event){
                event.addEventListener("click", function(){
                    switch(i){
                        case 1:
                        i++
                        place.style.src = step2;
                        break;
                    case 2:
                        i++
                        place.style.src = step3;
                        break;
                    case 3:
                        i++
                        place.style.src = step4;
                        break;
                    }
                })
            };

            nextStepMain.onclick = nextSlideMain(nextStepMain)




        }, false);
    }

    render(){

        return (
            <div>
                <img id="stepObject" src={step2}></img>
                <object id="svgObject"  type="image/svg+xml" data={backgroundForTest1}>
                    
                </object>
            </div>
        )
    }
}