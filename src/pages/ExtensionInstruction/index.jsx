import React, { Component } from "react";
import ReactHtmlParser from "react-html-parser";
import HintArrow from "./hintArrow";
// import StartBtn from "../../components/StartBtn";

import pickLanguageExample from "../../assets/images/extension-instruction/pickLanguageExample.svg";

import cardA from "../../assets/images/extension-instruction/cardA.svg";
import cardB from "../../assets/images/extension-instruction/cardB.svg";
import cardC from "../../assets/images/extension-instruction/cardC.svg";
import cardD from "../../assets/images/extension-instruction/cardD.svg";

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
          {/* <StartBtn link={"/extension-instruction"} id={"instruction-btn"} text={this.getLangText("InstructionStartButton")} /> */}
        </div>
      ),
      checkURL: window.location.href.includes("static"),
    };
    // if (navigator.language.indexOf("-") > -1) {
    //   localStorage.setItem(
    //     "lang",
    //     navigator.language.substring(0, navigator.language.indexOf("-"))
    //   );
    // }
  }

  getLangText(text) {
    return ReactHtmlParser(this.props.text[text]);
  }

  componentDidMount() {
    let mainSiteLang = "";
    const domain = "https://easylang.app/";
    const localDomain = "http://localhost:3000/";
    console.log(window.location.href.charAt(domain.length + 2));
    console.log(mainSiteLang);

    if (
      this.supportedLangs.indexOf(
        window.location.href.substr(domain.length, 2)
      ) === -1
    ) {
      localStorage.setItem("lang", "en");
      mainSiteLang = "en";
      window.location.href = `${domain}${mainSiteLang}/extension-instruction-static`;
    }
    if (
      window.location.href.substr(domain.length, 2) ===
      localStorage.getItem("lang")
    ) {
      return;
    }

    if (localStorage.getItem("lang") != null) {
      mainSiteLang = localStorage.getItem("lang");
      // alert(mainSiteLang);
      window.location.href = `${domain}${mainSiteLang}/extension-instruction-static`;
      // localStorage.clear();
    } else {
      localStorage.setItem("lang", navigator.language);
      mainSiteLang = navigator.language;
      // alert(mainSiteLang);
      window.location.href = `${domain}${mainSiteLang}/extension-instruction-static`;
    }
    // if (window.location.href.charAt(domain.length + 3) > -1) {
    //   localStorage.setItem(
    //     "lang",
    //     navigator.language.substring(0, navigator.language.indexOf("-"))
    //   );
    //   mainSiteLang = navigator.language.substring(
    //     0,
    //     navigator.language.indexOf("-")
    //   );
    // }
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

            {/* <div className="instruction_container_header_text">
              <p>{this.getLangText("1-InstructionParagraph-a")}</p>
              <p>{this.getLangText("2-InstructionParagraph-a")}</p>
            </div> */}
          </div>

          {this.state.checkURL !== true && this.state.extensionStartButton}

          <div className="instruction_container_main">
            {/* <div className="instruction_container_main_text-card">
              <div className="instruction_container_main_text-card_a">
                <div className="card_header">
                  <h2 className="card_title">
                    {this.getLangText("1-InstructionCardHeading-a")}
                  </h2>
                </div>

                <div className="card_folder">
                  <p>{this.getLangText("4-InstructionCardParagraph-a")}</p>
                  <div className="card_folder_content">
                    <img className="card-img-a" src={pickLanguageExample} />
                  </div>
                </div>
              </div>

              <div className="instruction_container_main_text-card_b">
                <div className="card_header">
                  <h2 className="card_title">
                    {this.getLangText("1-InstructionCardHeading-b")}
                  </h2>
                  <h2>{this.getLangText("2-InstructionCardHeading-b")}</h2>
                </div>

                <div className="card_folder">
                  <div className="card_folder_content">
                    <img className="card-img-b" src={cardA} />
                    <p>{this.getLangText("1-InstructionCardParagraph-b")}</p>
                  </div>
                  <div className="card_folder_content">
                    <img className="card-img-b" src={cardB} />
                    <p>{this.getLangText("2-InstructionCardParagraph-b")}</p>
                  </div>
                  <div className="card_folder_content">
                    <img className="card-img-b" src={cardC} />
                    <p>{this.getLangText("3-InstructionCardParagraph-b")}</p>
                  </div>
                  <div className="card_folder_content">
                    <img className="card-img-b" src={cardD} />
                    <p>{this.getLangText("4-InstructionCardParagraph-b")}</p>
                  </div>
                </div>

                <div className="card_footer">
                  <a href="https://easy4learn.com/login" target="_blank">
                    <input
                      type="button"
                      value={this.getLangText("1-InstructionCardButton-b")}
                      className="register"
                    />
                  </a>
                  <a href="https://easy4learn.com/login" target="_blank">
                    {this.getLangText("1-InstructionCardLink-b")}
                  </a>
                </div>
              </div>
            </div> */}

            <div className="instruction_container_main_step">
              {/* <div className="instruction_container_main_step_left"> */}
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
                  <img src={sectionStep1} />
                  {/* <h2>{this.getLangText("3-StepLeftHeading-a")}</h2> */}
                </div>
              </div>

              {/* </div> */}
              {/* <div className="instruction_container_main_step_right"> */}
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
                  <img src={sectionStep2} />
                  {/* <h2>{this.getLangText("3-StepLeftHeading-b")}</h2> */}
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
                  <img src={sectionStep3} />
                  {/* <h2>{this.getLangText("3-StepLeftHeading-c")}</h2> */}
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
                  <img src={sectionStep4} style={{ bottom: "25px" }} />
                </div>
              </div>
              {/* </div> */}
            </div>
          </div>

          <div className="instruction_container_footer">
            {this.state.checkURL !== true && this.state.extensionStartButton}
          </div>
        </div>
        <div className="instruction_footer_background"></div>
      </div>
    );
  }
}
