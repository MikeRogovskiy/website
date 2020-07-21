import React, { Component } from "react";
import Slider from "infinite-react-carousel";
import "./Slider.scss";
import "./sliderMedia.scss";
import max from "../../assets/max.svg";
import sasha from "../../assets/sasha.JPEG";
import vlad from "../../assets/vlad.JPEG";
import stars from "../../assets/stars.svg";
import nextArrow from "../../assets/nextArrow.svg";
import prevArrow from "../../assets/prevArrow.svg";
import ReactHtmlParser from "react-html-parser";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      src={nextArrow}
      id="carousel-right"
      alt="arrow next"
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      src={prevArrow}
      id="carousel-left"
      alt="arrow previous"
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
                  <div className="slider-item-content-avatar">
                    <img src={max} alt="Max" />
                    <img src={stars} alt="stars" />
                  </div>
                  
                  <div className="review">
                    
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
                <div className="slider-item-content-avatar">
                  <img src={sasha} alt="Sasha" className="funny-avatar"/>
                  <img src={stars} alt="stars" />
                </div>
                  <div className="review">
                    
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
                <div className="slider-item-content-avatar">
                  <img src={vlad} alt="Vlad" className="funny-avatar"/>
                  <img src={stars} alt="stars" />
                </div>

                  <div className="review">
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
