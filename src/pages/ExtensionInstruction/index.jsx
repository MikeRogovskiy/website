import React, { Component } from "react";
import ReactHtmlParser from "react-html-parser";
import MainHeader from "../../components/MainHeader";

import pickLanguageExample from "../../assets/images/extension-instruction/pickLanguageExample.svg";

import cardA from "../../assets/images/extension-instruction/cardA.svg";
import cardB from "../../assets/images/extension-instruction/cardB.svg";
import cardC from "../../assets/images/extension-instruction/cardC.svg";
import cardD from "../../assets/images/extension-instruction/cardD.svg";

import sectionGeneral from "../../assets/images/extension-instruction/sectionGeneral.svg";
import sectionSpecific from "../../assets/images/extension-instruction/sectionSpecific.svg";

import aNumSection from  "../../assets/images/extension-instruction/aNumSection.svg";
import bNumSection from  "../../assets/images/extension-instruction/bNumSection.svg";
import cNumSection from  "../../assets/images/extension-instruction/cNumSection.svg";
import dNumSection from  "../../assets/images/extension-instruction/dNumSection.svg";

import arrow from  "../../assets/images/extension-instruction/arrow.svg";
import arrowAnimation from "../../assets/images/extension-instruction/arrowAnimation.svg";

import "./ExtensionInstruction.scss";
import "./ExtensionInstructionMedia.scss";

export default class ExtensionInstruction extends Component{
    render() {
        return (
            <div className="instruction">
                <MainHeader />
                <div className="instruction_container">

                    {/*<div className="instruction_container_arrow">*/}
                    {/*    <img src={arrowAnimation} />*/}
                    {/*</div> animation arrow unfinished */}

                    <div className="instruction_container_header">

                        <div className="instruction_container_header_title">
                            <h1>Добро пожаловать в EasyLang!</h1>
                        </div>

                        <div className="instruction_container_header_text">
                            <p>Теперь Вы можете переводить слова и словосочетания в контексте</p>
                            <p>Улучшайте Ваши языковые навыки вместе с EasyLang </p>
                        </div>

                    </div>

                    <div className="instruction_container_start">
                        <a href="https://easylang.app/extension" target="_blank">
                            <input type="button" value="GET STARTED FREE" className="start-free"/>
                        </a>
                    </div>

                    <div className="instruction_container_main">

                        <div className="instruction_container_main_text-card">
                            <div className="instruction_container_main_text-card_a">

                                <div className="card_header">
                                    <h2 className="card_title">Выбери свой язык</h2>
                                </div>

                                <div className="card_folder">
                                    <div className="card_folder_content">
                                        <p className="card_folder_top">Ваш родной язык:</p>
                                        <img className="card-img-a"  src={pickLanguageExample} />
                                    </div>

                                    <p>Слова и выражения будут по умолчанию<br></br>переведены на Ваш родной язык</p>
                                    <h2>Не переводить страницы на родном языке:</h2>
                                    <p>По умолчанию функции перевода отключены,<br></br>если язык страницы совпадает с Вашим родным<br></br> языком. Вы можете активировать перевод для<br></br> таких страниц в Настройках.</p>
                                </div>
                            </div>
                            <div className="instruction_container_main_text-card_b">

                                <div className="card_header">
                                    <h2 className="card_title">Зарегистрируйся и получи</h2>
                                    <h2>больше преимуществ</h2>
                                </div>

                                <div className="card_folder">
                                    <div className="card_folder_content">
                                        <img className="card-img-b" src={cardA} /><p>Переведи слова и словосочетания</p>
                                    </div>
                                    <div className="card_folder_content">
                                        <img className="card-img-b" src={cardB} /><p>Добавляй слова для повторения</p>
                                    </div>
                                    <div className="card_folder_content">
                                        <img className="card-img-b" src={cardC} /><p>Играй в игры и повторяй новые слова</p>
                                    </div>
                                    <div className="card_folder_content">
                                        <img className="card-img-b" src={cardD} /><p>Возварщайся к прочитанным статьям</p>
                                    </div>
                                </div>

                                <div className="card_footer">
                                    <a href="https://easy4learn.com/login" target="_blank">
                                        <input type="button" value="Зарегистироваться" className="register" />
                                    </a>
                                    <a href="https://easy4learn.com/login" target="_blank">Войти</a>
                                </div>
                            </div>
                        </div>

                        <div className="instruction_container_main_step">
                            <div className="instruction_container_main_step_left">
                                <div className="step_section">
                                    <div className="step_section_header">
                                        <div className="step_section_header_image">
                                            <img src={aNumSection} />
                                        </div>
                                        <div className="step_section_header_text">
                                            <h3>Выдели и</h3>
                                            <h3>переведи слово</h3>
                                        </div>
                                    </div>

                                    <div className="step_section_main">
                                        <img src={sectionGeneral} />
                                        <h2>It’s such a <span>beautiful</span> life!</h2>
                                    </div>
                                </div>
                                <div className="step_section">
                                    <div className="step_section_header">
                                        <div className="step_section_header_image">
                                            <img src={cNumSection} />
                                        </div>
                                        <div className="step_section_header_text">
                                            <h3>Сохрани новое слово в</h3>
                                            <h3>контекстном меню в тьютер</h3>
                                        </div>
                                    </div>

                                    <div className="step_section_main">
                                        <img src={sectionGeneral} />
                                        <img src={arrow} className="step-arrow"/>
                                        <h2>It’s such a <span>beautiful</span> life!</h2>
                                    </div>
                                </div>


                            </div>
                            <div className="instruction_container_main_step_right">
                                <div className="step_section">
                                    <div className="step_section_header">
                                        <div className="step_section_header_image">
                                            <img src={bNumSection} />
                                        </div>
                                        <div className="step_section_header_text">
                                            <h3>Выдели слово и</h3>
                                            <h3>переведи все предложение</h3>
                                        </div>
                                    </div>

                                    <div className="step_section_main">
                                        <img src={sectionGeneral} />
                                        <h2>It’s such a <span>beautiful</span> life!</h2>
                                    </div>
                                </div>

                                <div className="step_section">
                                    <div className="step_section_header">
                                        <div className="step_section_header_image">
                                            <img src={dNumSection} />
                                        </div>
                                        <div className="step_section_header_text">
                                            <h3>Повтори их с помощью игр,</h3>
                                            <h3>на компьютере или телефоне</h3>
                                        </div>
                                    </div>

                                    <div className="step_section_main">
                                        <img src={sectionSpecific} />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="instruction_container_footer">
                        <div className="instruction_container_start">
                            <a href="https://easylang.app/extension" target="_blank">
                                <input type="button" value="GET STARTED FREE" className="start-free"/>
                            </a>
                        </div>
                    </div>

                </div>
                <div className="instruction_footer_background"></div>
            </div>
        );
    }
}