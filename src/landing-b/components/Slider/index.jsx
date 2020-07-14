import React, { Component } from "react";
import Slider from "infinite-react-carousel";
import "./Slider.scss";
import max from "../../assets/max.svg";
import stars from "../../assets/stars.svg";
import nextArrow from "../../assets/nextArrow.svg";
import prevArrow from "../../assets/prevArrow.svg";
import ReactHtmlParser from "react-html-parser";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      src={nextArrow}
      alt="arrow next"
      style={{
        position: "absolute",
        right: "0px",
        top: "50%",
        zIndex: "100",
        cursor: "pointer",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      src={prevArrow}
      alt="arrow previous"
      style={{
        position: "absolute",
        left: "0px",
        top: "50%",
        zIndex: "100",
        cursor: "pointer",
      }}
      onClick={onClick}
    />
  );
}

export default class CustomSlider extends Component {
  constructor(props) {
    super(props);
  }
  getLangText = (text) => {
    return ReactHtmlParser(this.props.text[text]);
  };
  render() {
    const settings = {
      adaptiveHeight: true,
      centerMode: false,
      prevArrow: <SamplePrevArrow />,
      nextArrow: <SampleNextArrow />,
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <div
              style={{
                width: "100%",
                height: "50%",

                display: "flex",
                justifyContent: "center",
              }}
            >
              <div className="slider-item">
                <div className="slider-item-content">
                  <img src={max} alt="Max" />
                  <div className="review">
                    <img src={stars} alt="stars" />
                    <p>
                      {this.getLangText("MaxReview")}
                      <br />
                      <b>{this.getLangText("Max")}</b>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div
              style={{
                width: "100%",
                height: "50%",

                display: "flex",
                justifyContent: "center",
              }}
            >
              <div className="slider-item">
                <div className="slider-item-content">
                  <img src={max} alt="Ann" />
                  <div className="review">
                    <img src={stars} alt="stars" />
                    <p>
                      {this.getLangText("AnnReview")} <br />{" "}
                      <b>{this.getLangText("Ann")}</b>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div
              style={{
                width: "100%",
                height: "50%",

                display: "flex",
                justifyContent: "center",
              }}
            >
              <div className="slider-item">
                <div className="slider-item-content">
                  <img src={max} alt="Tim" />
                  <div className="review">
                    <img src={stars} alt="stars" />
                    <p>
                      {this.getLangText("TimReview")} <br />{" "}
                      <b>{this.getLangText("Tim")}</b>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
