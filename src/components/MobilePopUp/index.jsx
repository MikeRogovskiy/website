import React from "react";
import "./mobilePopUp.scss";
import brainNPhone from "../../assets/images/player/brainAndPhone.svg"

export default function MobilePopUp(props){
    return(
        <div id="mobile-pop-up">
                <div className="pop-up_conteiner">
                    <div className="pop-up_conteiner_content">
                        <div className="pop-up_conteiner_content_header">
                            <div className="pop-up_conteiner_content_header_close">
                                <button>X</button>
                            </div>
                            <h2>Мобильная версия плеера в разработке</h2>
                        </div>
                        <div className="pop-up_conteiner_content_main">
                            <img src={brainNPhone}></img>
                            <h3>Для компьютера <br/><span>eLang</span> <span>Player</span><br/> доступен сейчас</h3>

                            <div className="pop-up_conteiner_content_main_inputs">
                                <input type="email" placeholder="Email" id="email-input"></input>
                                <input type="submit" id="submit-input"></input>
                            </div>
                            
                        </div>
                        <div className="pop-up_conteiner_content_footer">
                            
                        </div>
                    </div>
                </div>
        </div>
    )
}