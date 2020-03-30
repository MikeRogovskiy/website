import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import ReactHtmlParser from "react-html-parser";
import Header from "../Header";

import "./Test.scss";

import TestHeader from "./TestHeader.jsx";
import TestFooter from "./TestFooter.jsx";

import testScrollContent from "../../assets/scroll-content/test";


export default class Test extends Component {

  state = {
    bgImgId: 0,
    imgId: 0
  };

  imgTopOffset = 150;

  getLangText(text) {
    return ReactHtmlParser(this.props.text[text]);
  }

  componentDidMount() {
    document.addEventListener("scroll", this.scrollPageView);
  }

  componentWillUnmount() {
    document.removeEventListener("scroll", this.scrollPageView);
  }

  scrollPageView = () => {
    const position = window.pageYOffset;

    testScrollContent.forEach((content, index, arr) => {
      const element = content.parentRef;
      const nextItem = arr[index + 1] && arr[index + 1].parentRef;

      if (
        this.state.imgId !== index &&
        position + 250 + this.imgTopOffset >= element.offsetTop &&
        (nextItem ? position + 250 + this.imgTopOffset < nextItem.offsetTop : true)
      ) {
        this.setState(old => ({
          bgImgId: old.imgId,
          imgId: index
        }));
      }
    });
  };

  render() {

    // As imgTopOffset is used in scrollPage View, insert this styled block into separate constant
    const scrolledImagesStyle = {
      width: "100%",
      position: "sticky",
      left: 0,
      top: this.imgTopOffset
    }

    return (
      <div>
        <Header text={this.props.text} />

        <TestHeader text={this.props.text} />

        <div className="scrolled-content-header">
          <h1>{this.getLangText("ScrolledContentHeader")}</h1>
        </div>

        <div className="Description-Scroll">

          <div className="scrolled-content">

            <div className="scrolled-text">
              {testScrollContent.map((content, index) => {
                return (
                  <div
                    className="extension-block"
                    ref={ref => (content.parentRef = ref)}
                    key={index}
                  >
                    <div className="content">
                      <div className="extension-header content">
                        <div>
                          <div className="content-header">
                            <h2>{this.getLangText(content.header)}</h2>
                          </div>
                          <div className="content-body">
                            <p>{this.getLangText(content.body)}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="scrolled-images">
              <div
                style={scrolledImagesStyle}
              >
                <img
                  className="scrolled-item"
                  src={
                    testScrollContent[this.state.bgImgId].img[this.props.lang] || testScrollContent[this.state.bgImgId].img.en
                  }
                  alt="Scrolled_Item"
                />
                <Fade spy={this.state.imgId} duration={800}>
                  <img
                    className="scrolled-item"
                    style={{ zIndex: 2 }}
                    src={
                      testScrollContent[this.state.imgId].img[this.props.lang] || testScrollContent[this.state.imgId].img.en
                    }
                    alt="Scrolled_Item"
                  />
                </Fade>
              </div>
            </div>
          </div>
        </div>

        <TestFooter text={this.props.text} />

      </div>
    );
  }
}
