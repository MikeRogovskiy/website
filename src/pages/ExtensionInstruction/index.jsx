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
    constructor(props) {
        super(props);
        this.state = {
            extensionArrowAnimation:
                <div className="instruction_container_arrow">
                    <img src={arrowAnimation} />
                </div>,
            extensionStartButton:
                <div className="instruction_container_start">
                    <a href="https://chrome.google.com/webstore/detail/easylangapp-beta/cgelaojeiipaehoiiabkbickcpmpanel" target="_blank">
                        <input type="button" value={this.getLangText("InstructionStartButton")} className="start-free"/>
                    </a>
                </div>,
            checkURL: window.location.href.includes("static"),
        }


    };

    getLangText(text) {
        return ReactHtmlParser(this.props.text[text]);
    };

    render() {

        return (
            <div className="instruction">
                <MainHeader />
                <div className="instruction_container">


                    <div className="instruction_container_header">
                        { this.state.checkURL === true && this.state.extensionArrowAnimation }
                        <div className="instruction_container_header_title">
                            {/*<h1>Добро пожаловать в EasyLang!</h1>*/}
                            <h1>{this.getLangText("InstructionHeaderTitle")}</h1>
                        </div>

                        <div className="instruction_container_header_text">
                            <p>{this.getLangText("1-InstructionParagraph-a")}</p>
                            <p>{this.getLangText("2-InstructionParagraph-a")}</p>
                        </div>

                    </div>

                    { this.state.checkURL !== true && this.state.extensionStartButton }

                    <div className="instruction_container_main">

                        <div className="instruction_container_main_text-card">
                            <div className="instruction_container_main_text-card_a">

                                <div className="card_header">
                                    <h2 className="card_title">{this.getLangText("1-InstructionCardHeading-a")}</h2>
                                </div>

                                <div className="card_folder">
                                    <div className="card_folder_content">
                                        <p className="card_folder_top">{this.getLangText("3-InstructionCardParagraph-a")}</p>
                                        <img className="card-img-a"  src={pickLanguageExample} />
                                    </div>

                                    <p>{this.getLangText("4-InstructionCardParagraph-a")}</p>
                                    <h2>{this.getLangText("2-InstructionCardHeading-a")}</h2>
                                    <p>{this.getLangText("5-InstructionCardParagraph-a")}</p>
                                </div>
                            </div>
                            <div className="instruction_container_main_text-card_b">

                                <div className="card_header">
                                    <h2 className="card_title">{this.getLangText("1-InstructionCardHeading-b")}</h2>
                                    <h2>{this.getLangText("2-InstructionCardHeading-b")}</h2>
                                </div>

                                <div className="card_folder">
                                    <div className="card_folder_content">
                                        <img className="card-img-b" src={cardA} /><p>{this.getLangText("1-InstructionCardParagraph-b")}</p>
                                    </div>
                                    <div className="card_folder_content">
                                        <img className="card-img-b" src={cardB} /><p>{this.getLangText("2-InstructionCardParagraph-b")}</p>
                                    </div>
                                    <div className="card_folder_content">
                                        <img className="card-img-b" src={cardC} /><p>{this.getLangText("3-InstructionCardParagraph-b")}</p>
                                    </div>
                                    <div className="card_folder_content">
                                        <img className="card-img-b" src={cardD} /><p>{this.getLangText("4-InstructionCardParagraph-b")}</p>
                                    </div>
                                </div>

                                <div className="card_footer">
                                    <a href="https://easy4learn.com/login" target="_blank">
                                        <input type="button" value={this.getLangText("1-InstructionCardButton-b")} className="register" />
                                    </a>
                                    <a href="https://easy4learn.com/login" target="_blank">{this.getLangText("1-InstructionCardLink-b")}</a>
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
                                            <h3>{this.getLangText("1-StepLeftHeading-a")}</h3>
                                            <h3>{this.getLangText("2-StepLeftHeading-a")}</h3>
                                        </div>
                                    </div>

                                    <div className="step_section_main">
                                        <img src={sectionGeneral} />
                                        <h2>{this.getLangText("3-StepLeftHeading-a")}</h2>
                                    </div>
                                </div>
                                <div className="step_section">
                                    <div className="step_section_header">
                                        <div className="step_section_header_image">
                                            <img src={cNumSection} />
                                        </div>
                                        <div className="step_section_header_text">
                                            <h3>{this.getLangText("1-StepLeftHeading-c")}</h3>
                                            <h3>{this.getLangText("2-StepLeftHeading-c")}</h3>
                                        </div>
                                    </div>

                                    <div className="step_section_main">
                                        <img src={sectionGeneral} />
                                        <img src={arrow} className="step-arrow"/>
                                        <h2>{this.getLangText("3-StepLeftHeading-c")}</h2>
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
                                            <h3>{this.getLangText("1-StepLeftHeading-b")}</h3>
                                            <h3>{this.getLangText("2-StepLeftHeading-b")}</h3>
                                        </div>
                                    </div>

                                    <div className="step_section_main">
                                        <img src={sectionGeneral} />
                                        <h2>{this.getLangText("3-StepLeftHeading-b")}</h2>
                                    </div>
                                </div>

                                <div className="step_section">
                                    <div className="step_section_header">
                                        <div className="step_section_header_image">
                                            <img src={dNumSection} />
                                        </div>
                                        <div className="step_section_header_text">
                                            <h3>{this.getLangText("1-StepLeftHeading-d")}</h3>
                                            <h3>{this.getLangText("2-StepLeftHeading-d")}</h3>
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

                        { this.state.checkURL !== true && this.state.extensionStartButton }

                    </div>

                </div>
                <div className="instruction_footer_background"></div>
            </div>
        );
    }
}