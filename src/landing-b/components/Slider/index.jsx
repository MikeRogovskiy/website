import React, { Component } from "react";
import Slider from "infinite-react-carousel";
import "./Slider.scss";
import max from "../../assets/max.svg";
import stars from "../../assets/stars.svg";
import nextArrow from "../../assets/nextArrow.svg";
import prevArrow from "../../assets/prevArrow.svg";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      src={nextArrow}
      alt=""
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
      alt=""
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
                  <img src={max} alt="" />
                  <div className="review">
                    <img src={stars} alt="" />
                    <p>
                      Quickly translate any text and enjoy <br /> the world
                      content without limits! Understand everything! <br />{" "}
                      <b>Max</b>
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
                  <img src={max} alt="" />
                  <div className="review">
                    <img src={stars} alt="" />
                    <p>
                      Quickly translate any text and enjoy <br /> the world
                      content without limits! Understand everything! <br />{" "}
                      <b>Max</b>
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
                  <img src={max} alt="" />
                  <div className="review">
                    <img src={stars} alt="" />
                    <p>
                      Quickly translate any text and enjoy <br /> the world
                      content without limits! Understand everything! <br />{" "}
                      <b>Max</b>
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
