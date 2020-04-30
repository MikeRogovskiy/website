import React, { Component } from "react";
import ReactHtmlParser from "react-html-parser";
import MainHeader from "../../components/MainHeader";

import "./Plans.scss";

import plansV from "../../assets/images/Plans/plansV.svg";

export default class Plans extends Component {

  getLangText(text) {
    return ReactHtmlParser(this.props.text[text]);
  }

  render() {

    return (
      <div>
        <MainHeader />

        <div className="plans">
          <div className="plans_wrapper">
            <div className="plans_wrapper_head">
              <h1 className="head-title">{this.getLangText("PlansTitle")}</h1>
              <p className="head-subtitle">{this.getLangText("1-PlansSubtitle")}</p>
              <p className="head-subtitle">{this.getLangText("2-PlansSubtitle")}</p>
            </div>

            <div className="plans_wrapper_container">
              <div className="container-item">
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
                           onClick={myFunction} value={this.getLangText("ButtonName")}>
                    </input>
                  </div>
                </div>
              </div>

              <div className="container-item">
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
                           onClick={myFunction} value={this.getLangText("ButtonName")}>
                    </input>
                  </div>
                </div>
              </div>

              <div className="container-item">
                <div className="container-item_content">
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
                           onClick={myFunction} value={this.getLangText("ButtonName")}>
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

function myFunction() {
  alert("На текущий момент продукт бесплатный. Для его использования вы можете ввести бесплатный купон EASYTUTOR30 в своем аккаунте. Спасибо за использование продукта!");
  
}
