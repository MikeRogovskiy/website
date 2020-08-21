import React, { Component } from "react";
import ReactHtmlParser from "react-html-parser";
import HintArrow from "./hintArrow";
import FooterNavBar from "../../components/FooterNavBar";

import pickLanguageExample from "../../assets/images/extension-instruction/pickLanguageExample.svg";
import sectionStep1 from "../../assets/images/extension-instruction/sectionStep1.svg";
import sectionStep2 from "../../assets/images/extension-instruction/sectionStep2.svg";
import sectionStep3 from "../../assets/images/extension-instruction/sectionStep3.svg";
import sectionStep4 from "../../assets/images/extension-instruction/sectionStep4.svg";

import arrow from "../../assets/images/extension-instruction/arrow.svg";

import "./ExtensionInstruction.scss";
import "./ExtensionInstructionMedia.scss";

export default class ExtensionInstruction extends Component {
  constructor(props) {
    super(props);
    this.supportedLangs = ["en", "es", "ru", "zh"];
    this.state = {
      extensionStartButton: (
        <div className="instruction_container_start">
          <a
            href="https://chrome.google.com/webstore/detail/easylangapp-beta/cgelaojeiipaehoiiabkbickcpmpanel"
            target="_blank"
          >
            <input
              type="button"
              value={this.getLangText("InstructionStartButton")}
              className="start-free"
            />
          </a>
        </div>
      ),
      checkURL: window.location.href.includes("static"),
      page: "extension"
    };

    // this.mainSiteLang = "";
    // this.domain = "https://easylang.app/";
    // // this.domain = "http://localhost:3000/";
    // console.log(window.location.href.charAt(this.domain.length + 2));
    // // console.log(mainSiteLang);
    //
    // if (
    //   this.supportedLangs.indexOf(
    //     window.location.href.substr(this.domain.length, 2)
    //   ) === -1
    // ) {
    //   localStorage.setItem("lang", "en");
    //   this.mainSiteLang = "en";
    //   window.location.href = `${this.domain}${this.mainSiteLang}/extension-instruction-static`;
    // }
    // if (
    //   window.location.href.substr(this.domain.length, 2) ===
    //   localStorage.getItem("lang")
    // ) {
    //   return;
    // }
    //
    // if (localStorage.getItem("lang") != null) {
    //   this.mainSiteLang = localStorage.getItem("lang");
    //   // alert(mainSiteLang);
    //   window.location.href = `${this.domain}${this.mainSiteLang}/extension-instruction-static`;
    //   // localStorage.clear();
    // } else {
    //   localStorage.setItem("lang", navigator.language);
    //   this.mainSiteLang = navigator.language;
    //   // alert(mainSiteLang);
    //   window.location.href = `${this.domain}${this.mainSiteLang}/extension-instruction-static`;
    // }
  }


  getLangText(text) {
    return ReactHtmlParser(this.props.text[text]);
  }


  render() {
    return (
      <div className="instruction">
        <div className="instruction_container">
          <div className="instruction_container_header">
            <HintArrow urlCondition={this.state.checkURL} />

            <div className="instruction_container_header_title">
              <h1>{this.getLangText("InstructionHeaderTitle")}</h1>
            </div>
          </div>

          {this.state.checkURL !== true && this.state.extensionStartButton}

          <div className="instruction_container_main">

            <div className="instruction_container_main_step">
              <div className="step_section">
                <div className="step_section_header">
                  <div className="step_section_header_text">
                    <span className="step_section_header_num">1</span>
                    <h3>
                      {this.getLangText("1-StepLeftHeading-a")}
                      <br />
                      {this.getLangText("2-StepLeftHeading-a")}
                    </h3>
                  </div>
                </div>

                <div className="step_section_main">
                  <img src={sectionStep1} alt="steep 1" />
                </div>
              </div>

              <div className="step_section">
                <div className="step_section_header">
                  <div className="step_section_header_text">
                    <span className="step_section_header_num">2</span>
                    <h3>
                      {this.getLangText("1-StepLeftHeading-b")} <br />
                      {this.getLangText("2-StepLeftHeading-b")}
                    </h3>
                  </div>
                </div>

                <div className="step_section_main">
                  <img src={sectionStep2} alt="step 2" />
                </div>
              </div>

              <div className="step_section">
                <div className="step_section_header">
                  <div className="step_section_header_text">
                    <span className="step_section_header_num">3</span>
                    <h3>
                      {this.getLangText("1-StepLeftHeading-c")}
                      <br />
                      {this.getLangText("2-StepLeftHeading-c")}
                    </h3>
                  </div>
                </div>

                <div className="step_section_main">
                  <img src={sectionStep3} alt="step 3" />
                </div>
              </div>
              <div className="step_section">
                <div className="step_section_header">
                  <div className="step_section_header_text">
                    <span className="step_section_header_num">4</span>
                    <h3>
                      {this.getLangText("1-StepLeftHeading-d")}
                      <br />
                      {this.getLangText("2-StepLeftHeading-d")}
                    </h3>
                  </div>
                </div>

                <div className="step_section_main">
                  <img
                    src={sectionStep4}
                    style={{ bottom: "25px" }}
                    alt="step4"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="instruction_container_footer">
            {this.state.checkURL !== true && this.state.extensionStartButton}
          </div>
        </div>
        <div className="instruction_footer_background"></div>
        <footer>
          <FooterNavBar text={this.props.text} page={this.state.page}/>
        </footer>
      </div>
    );
  }
}
