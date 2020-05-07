import React, { Component } from "react";
import ReactHtmlParser from "react-html-parser";
import MainHeader from "../../components/MainHeader";
import PopUpWindow from "./PopUpWindow";
import PopUpBackground from "./PopUpBackground";

import "./Plans.scss";
import "./PlansMedia.scss";

import plansV from "../../assets/images/Plans/plansV.svg";


export default class Plans extends Component {

  getLangText(text) {
    return ReactHtmlParser(this.props.text[text]);
  };

  render() {
    function popUpManipulations(){
      const popUpWindow = document.querySelector(".container-pop-up");
      const popUpBackground = document.querySelector(".pop-up-background");
      const plans = document.querySelector(".plans");

      function changeState(opacityPlans, bgColor, opacityPopUp, display){
        plans.style.opacity = opacityPlans;
        plans.style.backgroundColor = bgColor;
        popUpWindow.style.opacity = opacityPopUp;
        popUpBackground.style.opacity = opacityPopUp;
        popUpWindow.style.display = display;
        popUpBackground.style.display = display;
      };

      function deletePopUp(){
        popUpWindow.style.display = "none";
        popUpBackground.style.display = "none";
      };

      if ( popUpWindow.style.display !== "flex" && popUpBackground.style.display !== "flex" ){
        changeState("47%", "#245FAB", "1", "flex")
      } else {
        changeState("1", "", "0", "")
        setTimeout(deletePopUp, 500);
      };

    };

    return (
      <div className="plans-folder">
        <MainHeader />

        <PopUpWindow action={popUpManipulations} text={this.props.text}/>
        <PopUpBackground />
        <div className="plans">
          <div className="plans_wrapper">

            <div className="plans_wrapper_head">
              <h1 className="head-title">{this.getLangText("PlansTitle")}</h1>
              <p className="head-subtitle">{this.getLangText("1-PlansSubtitle")}</p>
              <p className="head-subtitle">{this.getLangText("2-PlansSubtitle")}</p>
            </div>

            <div className="plans_wrapper_container">

              <div className="container-item" id="item-standard">
                <div className="container-item_content">

                  <div className="container-item_content_header">
                    <h2 id="unique-item-paragraph">{this.getLangText("Standard")}</h2>
                    <h1>{this.getLangText("StandardCondition")}</h1>
                    <h3>{this.getLangText("StandardSubtitle")}</h3>
                  </div>
                  <div className="container-item_content_main">

                    <div className="main-item">
                      <img src={plansV} alt="v-image"/>
                      <p>{this.getLangText("1-StandardPoint")}</p>
                    </div>
                    <div className="main-item">
                      <p>{this.getLangText("2-StandardPoint")}</p>
                    </div>

                  </div>
                  <div className="container-item_content_footer">
                    <input type="button" className="container-item_content_footer_btn"
                           target="_blank"  rel="noopener noreferrer" id="unique-item-button"
                           onClick={popUpManipulations} value={this.getLangText("ButtonName")}>
                    </input>
                  </div>

                </div>
              </div>

              <div className="container-item" id="item-premium">
                <div className="container-item_content">

                  <div className="container-item_content_header">
                    <h2>{this.getLangText("Premium")}</h2>
                    <h1>{this.getLangText("PremiumCondition")}</h1>
                    <h3>{this.getLangText("PremiumSubtitle")}</h3>
                  </div>
                  <div className="container-item_content_main">

                    <div className="main-item">
                      <img src={plansV} alt="v-image"/>
                      <p>{this.getLangText("1-PremiumPoint")}</p>
                    </div>
                    <div className="main-item">
                      <img src={plansV} alt="v-image"/>
                      <p>{this.getLangText("2-PremiumPoint")}</p>
                    </div>

                  </div>
                  <div className="container-item_content_footer">
                    <input type="button" className="container-item_content_footer_btn"
                           target="_blank"  rel="noopener noreferrer"
                           onClick={popUpManipulations} value={this.getLangText("ButtonName")}>
                    </input>
                  </div>

                </div>
              </div>

              <div className="container-item" id="item-super-premium">
                <div className="container-item_content" >

                  <div className="container-item_content_header">
                    <h2>{this.getLangText("SuperPremium")}</h2>
                    <h1>{this.getLangText("SuperPremiumCondition")}</h1>
                    <h3>{this.getLangText("SuperPremiumSubtitle")}</h3>
                  </div>
                  <div className="container-item_content_main">

                    <div className="main-item">
                      <img src={plansV} alt="v-image"/>
                      <p>{this.getLangText("1-SuperPremiumPoint")}</p>
                    </div>
                    <div className="main-item">
                      <img src={plansV} alt="v-image"/>
                      <p>{this.getLangText("2-SuperPremiumPoint")}</p>
                    </div>

                  </div>
                  <div className="container-item_content_footer">
                    <input type="button" className="container-item_content_footer_btn"
                           target="_blank"  rel="noopener noreferrer"
                           onClick={popUpManipulations} value={this.getLangText("ButtonName")}>
                    </input>
                  </div>

                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    );

  };

};