import React, { useState } from "react";
import "./mobilePopUp.scss";
import "./mobilePopUpMedia.scss";
// import brainNPhone from "../../assets/images/player/brainAndPhone.svg"
import brainNPhone from "../../assets/images/player/Brain.png"
import brainExtension from "../../assets/images/player/brainExtension.svg"
import ReactHtmlParser from "react-html-parser";

export default function MobilePopUp(props){
    const [bgColor, setBgColor] = useState("#DADCE5");
    const [color, setColor] = useState("#8A8D99");
    const [email, setEmail] = useState('');

    const checkInputValidity = (event) => {
        if(document.querySelector("#email-input").validity.valid){
            setBgColor("#637CF2");
            setColor("#FFFFFF");
            setEmail(event.target.value);
        } else {
            setBgColor("#DADCE5");
            setColor("#8A8D99");
        }
    };

    const getLangText = (text) => {
        return ReactHtmlParser(props.text[text]);
    };

    const sendUserEmail = (event) => {
        fetch('https://2mymemory.com/api/utility/add_user', {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify({
                userEmail: email,
                userAgent: navigator.userAgent,
                product: props.product,
                language: localStorage.getItem('lang'),
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => console.log(res));
        event.preventDefault();
        props.setPopupVisibility(false);
    };

    return(
        
        <div id="mobile-pop-up">

            <div className="pop-up_container">

                <div className="pop-up_container_content">
                    <div className="pop-up_container_content_header">
                        <div className="pop-up_container_content_header_close">
                            <div className="pop-up_container_content_header_close_block">
                                <button onClick={()  => {props.setPopupVisibility(false)}}>X</button>
                            </div>
                        </div>
                        <h2>{getLangText(props.product + "PopupTitle")}</h2>
                    </div>
                    <div className="pop-up_container_content_main">
                        <img src={props.product === "Player" ? brainNPhone : brainExtension}/>
                        <h3>{getLangText(props.product + "PopupMain")}</h3>

                        <div className="pop-up_container_content_main_inputs">
                            <form 
                                method="POST"
                                onSubmit={sendUserEmail}
                            >
                                <input
                                    type="email"
                                    placeholder="Email"
                                    id="email-input"
                                    pattern="[^ @]*@[^ @]*"
                                    onChange={checkInputValidity}
                                    required />
                                <button
                                    type="submit"
                                    id="submit-input"
                                    style={{
                                        backgroundColor: bgColor,
                                        color: color
                                    }} >
                                    {getLangText("SendButton")}
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
               
        </div>
    )
}
