import React, { Component } from "react";
import ReactHtmlParser from "react-html-parser";
import MainHeader from "../../components/MainHeader";

import pickLanguageExample from "../../assets/images/extension-instruction/pickLanguageExample.svg";

import hintsA from "../../assets/images/extension-instruction/hintsA.svg";
import hintsB from "../../assets/images/extension-instruction/hintsB.svg";
import hintsC from "../../assets/images/extension-instruction/hintsC.svg";
import hintsD from "../../assets/images/extension-instruction/hintsD.svg";

import sectionGeneral from "../../assets/images/extension-instruction/sectionGeneral.svg";
import sectionSpecific from "../../assets/images/extension-instruction/sectionSpecific.svg";

import aNumSection from  "../../assets/images/extension-instruction/aNumSection.svg";
import bNumSection from  "../../assets/images/extension-instruction/bNumSection.svg";
import cNumSection from  "../../assets/images/extension-instruction/cNumSection.svg";
import dNumSection from  "../../assets/images/extension-instruction/dNumSection.svg";

import "./ExtensionInstruction.scss";

export default class ExtensionInstruction extends Component{
    render() {
        return (
            <div className="instruction">
                <MainHeader />
                <div className="instruction_container">

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
                        <input type="button" value="GET STARTED FREE" className="start-free"/>
                    </div>

                    <div className="instruction_container_main">

                        <div className="instruction_container_main_text-hints">
                            <div className="instruction_container_main_text-hints_a">

                                <div className="hints_header">
                                    <h2 className="hints_title">Выбери свой язык</h2>
                                </div>

                                <div className="hints_folder">
                                    <p className="hints_folder_top">Ваш родной язык:<img className="hints-img-a"  src={pickLanguageExample} /></p>
                                    <p>Слова и выражения будут по умолчанию переведены на Ваш родной язык</p>
                                    <h2>Не переводить страницы на родном языке:</h2>
                                    <p>По умолчанию функции перевода отключены,<br></br>если язык страницы совпадает с Вашим родным<br></br> языком. Вы можете активировать перевод для<br></br> таких страниц в Настройках.</p>
                                </div>
                            </div>
                            <div className="instruction_container_main_text-hints_b">

                                <div className="hints_header">
                                    <h2 className="hints_title">Зарегистрируйся и получи</h2>
                                    <h2>больше преимуществ</h2>
                                </div>

                                <div className="hints_folder">
                                    <div className="hints_folder_content">
                                        <img className="hints-img-b" src={hintsA} /><p>Переведи слова и словосочетания</p>
                                    </div>
                                    <div className="hints_folder_content">
                                        <img className="hints-img-b" src={hintsB} /><p>Добавляй слова для повторения</p>
                                    </div>
                                    <div className="hints_folder_content">
                                        <img className="hints-img-b" src={hintsC} /><p>Играй в игры и повторяй новые слова</p>
                                    </div>
                                    <div className="hints_folder_content">
                                        <img className="hints-img-b" src={hintsD} /><p>Возварщайся к прочитанным статьям</p>
                                    </div>
                                </div>

                                <div className="hints_footer">
                                    <input type="button" value="Зарегистироваться" className="register"/>
                                    <a href="https://easylang.app/">Войти</a>
                                </div>
                            </div>
                        </div>

                        <div className="instruction_container_main_presentation">
                            <div className="instruction_container_main_presentation_height">
                                <div className="presentation_section">
                                    <div className="presentation_section_header">
                                        <div className="presentation_section_header_image">
                                            <img src={aNumSection} />
                                        </div>
                                        <div className="presentation_section_header_text">
                                            <h3>Выдели и</h3>
                                            <h3>переведи слово</h3>
                                        </div>
                                    </div>

                                    <div className="presentation_section_main">
                                        <img src={sectionGeneral} />
                                        <h2>It’s such a <span>beautiful</span> life!</h2>
                                    </div>
                                </div>

                                <div className="presentation_section">
                                    <div className="presentation_section_header">
                                        <div className="presentation_section_header_image">
                                            <img src={bNumSection} />
                                        </div>
                                        <div className="presentation_section_header_text">
                                            <h3>Выдели слово и</h3>
                                            <h3>переведи все предложение</h3>
                                        </div>
                                    </div>

                                    <div className="presentation_section_main">
                                        <img src={sectionGeneral} />
                                        <h2>It’s such a <span>beautiful</span> life!</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="instruction_container_main_presentation_low">
                                <div className="presentation_section">
                                    <div className="presentation_section_header">
                                        <div className="presentation_section_header_image">
                                            <img src={cNumSection} />
                                        </div>
                                        <div className="presentation_section_header_text">
                                            <h3>Сохрани новое слово в</h3>
                                            <h3>контекстном меню в тьютер</h3>
                                        </div>
                                    </div>

                                    <div className="presentation_section_main">
                                        <img src={sectionGeneral} />
                                        <h2>It’s such a <span>beautiful</span> life!</h2>
                                    </div>
                                </div>

                                <div className="presentation_section">
                                    <div className="presentation_section_header">
                                        <div className="presentation_section_header_image">
                                            <img src={dNumSection} />
                                        </div>
                                        <div className="presentation_section_header_text">
                                            <h3>Повтори их с помощью игр,</h3>
                                            <h3>на компьютере или телефоне</h3>
                                        </div>
                                    </div>

                                    <div className="presentation_section_main">
                                        <img src={sectionSpecific} />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="instruction_container_footer">
                        <div className="instruction_container_start">
                            <input type="button" value="GET STARTED FREE" className="start-free"/>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}