import React, { Component } from "react";
import ReactHtmlParser from "react-html-parser";
import MainHeader from "../MainHeader";

import "./PricesTest.scss";

import blue_dot from '../../assets/images/Plans/blue_dot.png';
import green_dot from '../../assets/images/Plans/green_dot.png';
import yellow_dot from '../../assets/images/Plans/yellow_dot.png';

export default class PricesTest extends Component {

  getLangText(text) {
    return ReactHtmlParser(this.props.text[text]);
  }

  render() {
    return (
      <div style={{ fontFamily: "Montserrat" }}>
        <MainHeader />

        <header className="getStartedPlans-header">
          <div className="wrapper-getStartedPlans">
            <div>
              <h1 className="getStartedPlans-title">{this.getLangText("PlansTitle")}</h1>
              <p className="getStartedPlans-subtitle">{this.getLangText("1-PlansSubtitle")}</p>
              <p className="getStartedPlans-subtitle">{this.getLangText("2-PlansSubtitle")}</p>
              <p className="getStartedPlans-subtitle">{this.getLangText("3-PlansSubtitle")}</p>
            </div>

            <div className="plans-container">

              <container className="plans-item">
                <div className="plans-content">
                  <div className="header-block">
                    <h2>{this.getLangText("Standart")}</h2>
                    <h1>{this.getLangText("Free")}</h1>
                  </div>
                  <div className="advantages-block">
                    <div className="advantages-item">
                      <img src={blue_dot} />
                      <p>{this.getLangText("1-StandartPoint")}</p>
                    </div>
                    <div className="advantages-item">
                      <img src={blue_dot} />
                      <p>{this.getLangText("2-StandartPoint")}</p>
                    </div>
                  </div>
                </div>
              </container>

              <container className="plans-item">
                <div className="plans-content">
                  <div className="header-block">
                    <h2 style={{ color: "#F2994A" }}>{this.getLangText("Premium")}</h2>
                    <h1><span style={{ fontSize: "1.8rem" }}>$</span>
                        7.99
                      <span style={{ color: "silver", fontSize: "1.8rem" }}>{this.getLangText("Month")}</span>
                    </h1>
                  </div>
                  <div className="advantages-block">
                    <div className="advantages-item">
                      <img src={yellow_dot} />
                      <p>{this.getLangText("1-PremiumPoint")}</p>
                    </div>
                    <div className="advantages-item">
                      <img src={yellow_dot} />
                      <p>{this.getLangText("2-PremiumPoint")}</p>
                    </div>
                  </div>
                  <div className="button-block">
                    <a
                      className="plans-started-button top"
                      style={{ backgroundColor: "#F2994A" }}
                      href="https://chrome.google.com/webstore/detail/lnjampkehdeoilenmkceiganjofpahbb"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>{this.getLangText("Choose")}</span>
                    </a>
                  </div>
                </div>
              </container>

              <container className="plans-item" style={{ border: "3.5px solid #34D086" }}>
                <div className="plans-content">
                  <div className="header-block">
                    <h2 style={{ color: "#34D086" }}>{this.getLangText("SuperPremium")}</h2>
                    <h1><span style={{ fontSize: "1.8rem" }}>$</span>
                        4.99
                      <span style={{ color: "silver", fontSize: "1.8rem" }}>{this.getLangText("Month")}</span>
                    </h1>
                    <p style={{ fontSize: "1.2rem" }}>{this.getLangText("PremiumSubtitle")}</p>
                  </div>
                  <div className="advantages-block">
                    <div className="advantages-item">
                      <img src={green_dot} />
                      <p>{this.getLangText("1-SuperPremiumPoint")}</p>
                    </div>
                    <div className="advantages-item">
                      <img src={green_dot} />
                      <p>{this.getLangText("2-SuperPremiumPoint")}</p>
                    </div>
                  </div>
                  <div className="button-block">
                    <a
                      className="plans-started-button top"
                      style={{ backgroundColor: "#34D086" }}
                      href="https://chrome.google.com/webstore/detail/lnjampkehdeoilenmkceiganjofpahbb"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>{this.getLangText("Choose")}</span>
                    </a>
                  </div>
                </div>
              </container>

            </div>
          </div>
        </header>
      </div>
    );
  }
}
