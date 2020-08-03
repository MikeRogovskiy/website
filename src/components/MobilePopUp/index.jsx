import React, { useState } from "react";
import "./mobilePopUp.scss";
import "./mobilePopUpMedia.scss";
import brainNPhone from "../../assets/images/player/brainAndPhone.svg"

export default function MobilePopUp(props){
    const [bgColor, setBgColor] = useState("#DADCE5");
    const [color, setColor] = useState("#8A8D99");
    // const [popUpAlign, setPopUpAlign] = useState("central");
    
    const checkInputValidity = () => {
        if(document.querySelector("#email-input").validity.valid){
            setBgColor("#637CF2");
            setColor("#FFFFFF");
        } else {
            setBgColor("#DADCE5");
            setColor("#8A8D99");
        }
    };

    // const hidePopUp = (data) => {
    //     props.passPopUpState(data)
    // };

    // let currentPercentageScroll = 0;
    // const calculatePercantages = () => {

    //     function calculatePercenteges(percentages){
    //       let p = percentages.parentNode;
    //         currentPercentageScroll = (percentages.scrollTop || p.scrollTop) / (p.scrollHeight - p.clientHeight ) * 100;
    //       return  Math.round(currentPercentageScroll);
    //     };
    //     calculatePercenteges(document.body);
        
    //     console.log(currentPercentageScroll)
        
    //     if(currentPercentageScroll < 0.003){
    //         console.log("<")
    //         setPopUpMargin("5vh")
    //     } else if (currentPercentageScroll > 1){
    //         console.log(">=")
    //         setPopUpMargin("0vh")
    //     }
    // };

    // window.addEventListener('scroll', function() {
    //     console.log(window.pageYOffset + 'px');
    // });

    // window.onscroll = window.pageYOffset = 0 ? setPopUpAlign("none") : null;

    return(
        <div id="mobile-pop-up">
            <div className="pop-up_container"
                // style={{
                //     alignItems: popUpAlign
                // }}
            >
                <div className="pop-up_container_content">
                    <div className="pop-up_container_content_header">
                        <div className="pop-up_container_content_header_close">
                            <div className="pop-up_container_content_header_close_block">
                                <button onClick={()  => {props.updateProps(false)}}>X</button>
                            </div>
                        </div>
                        <h2>Мобильная версия плеера в разработке</h2>
                    </div>
                    <div className="pop-up_container_content_main">
                        <img src={brainNPhone}></img>
                        <h3>Для компьютера <br/><span>eLang</span> <span>Player</span><br/> доступен сейчас</h3>

                        <div className="pop-up_container_content_main_inputs">
                            <form>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    id="email-input"
                                    pattern="[^ @]*@[^ @]*"
                                    onChange={() => {checkInputValidity()}}
                                    required />
                                <input
                                    type="submit"
                                    id="submit-input"
                                    value="Submit"
                                    style={{
                                        backgroundColor: bgColor,
                                        color: color
                                    }} />
                            </form>
                        </div>

                    </div>
                </div>
            </div>
               
        </div>
    )
}