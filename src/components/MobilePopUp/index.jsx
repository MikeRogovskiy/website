import React, { useState } from "react";
import "./mobilePopUp.scss";
import "./mobilePopUpMedia.scss";
// import brainNPhone from "../../assets/images/player/brainAndPhone.svg"
import brainNPhone from "../../assets/images/player/Brain.png"

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

    const sendUserEmail = (event) => {
        fetch('https://2mymemory.com/api/utility/add_user', {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify({
                userEmail: email,
                userAgent: navigator.userAgent
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => console.log(res));
        event.preventDefault();
        props.updateProps(false);
    };

    return(
        
        <div id="mobile-pop-up">

            <div className="pop-up_container">

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
