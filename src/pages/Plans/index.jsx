import React, { Component } from "react";
import ReactHtmlParser from "react-html-parser";
import MainHeader from "../../components/MainHeader";

import "./Plans.scss";

import blue_dot from '../../assets/images/Plans/blue_dot.png';
import green_dot from '../../assets/images/Plans/green_dot.png';
import yellow_dot from '../../assets/images/Plans/yellow_dot.png';

export default class Plans extends Component {

  getLangText(text) {
    return ReactHtmlParser(this.props.text[text]);
  }

  render() {

    const dollarSize = { fontSize: '1.8rem' }

    const MonthStyles = {
      color: 'silver',
      fontSize: "1.8rem",
    }

    const premiumColor = { color: '#F2994A'}
    const premiumBackgroundColor = { backgroundColor: '#F2994A' };
    const premiumBorder = { border: '3.5px solid #34D086' }
    const superPremiumColor = { color: '#34D086'}
    const superPremiumBackgroundColor = { backgroundColor: '#34D086' };

    return (
      <div>
        <MainHeader />

        <div className="plans">
          <div className="plans_wrapper">
            <div className="plans_wrapper_head">
              <h1 className="head-title">{this.getLangText("PlansTitle")}</h1>
              <p className="head-subtitle">{this.getLangText("1-PlansSubtitle")}</p>
              <p className="head-subtitle">{this.getLangText("2-PlansSubtitle")}</p>
              <p className="head-subtitle">{this.getLangText("3-PlansSubtitle")}</p>
            </div>

            <div className="plans_wrapper_container">
              <container className="container-item">
                <div className="container-item_content">
                  <div className="container-item_content_header">
                    <h2>{this.getLangText("Standart")}</h2>
                    <h1>{this.getLangText("Free")}</h1>
                  </div>
                  <div className="container-item_content_main">
                    <div className="main-item">
                      <img src={blue_dot} />
                      <p>{this.getLangText("1-StandartPoint")}</p>
                    </div>
                    <div className="main-item">
                      <img src={blue_dot} />
                      <p>{this.getLangText("2-StandartPoint")}</p>
                    </div>
                  </div>
                </div>
              </container>

              <container className="container-item">
                <div className="container-item_content">
                  <div className="container-item_content_header">
                    <h2 style={premiumColor}>{this.getLangText("Premium")}</h2>
                    <h1><span style={dollarSize}>$</span>
                      7.99
                      <span style={MonthStyles}>{this.getLangText("Month")}</span>
                    </h1>
                  </div>
                  <div className="container-item_content_main">
                    <div className="main-item">
                      <img src={yellow_dot} />
                      <p>{this.getLangText("1-PremiumPoint")}</p>
                    </div>
                    <div className="main-item">
                      <img src={yellow_dot} />
                      <p>{this.getLangText("2-PremiumPoint")}</p>
                    </div>
                  </div>
                  <div className="container-item_content_footer">
                    <a
                        className="container-item_content_footer_btn top"
                        style={premiumBackgroundColor}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={myFunction}
                    >
                      <span>{this.getLangText("Choose")}</span>
                    </a>
                  </div>
                </div>
              </container>

              <container className="container-item" style={premiumBorder}>
                <div className="container-item_content">
                  <div className="container-item_content_header">
                    <h2 style={superPremiumColor}>{this.getLangText("SuperPremium")}</h2>
                    <h1><span style={dollarSize}>$</span>
                      4.99
                      <span style={MonthStyles}>{this.getLangText("Month")}</span>
                    </h1>
                    <p>{this.getLangText("PremiumSubtitle")}</p>
                  </div>
                  <div className="container-item_content_main">
                    <div className="main-item">
                      <img src={green_dot} />
                      <p>{this.getLangText("1-SuperPremiumPoint")}</p>
                    </div>
                    <div className="main-item">
                      <img src={green_dot} />
                      <p>{this.getLangText("2-SuperPremiumPoint")}</p>
                    </div>
                  </div>
                  <div className="container-item_content_footer">
                    <a
                        className="container-item_content_footer_btn top"
                        style={superPremiumBackgroundColor}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={myFunction}
                    >
                      <span>{this.getLangText("Choose")}</span>
                    </a>
                  </div>
                </div>
              </container>
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
