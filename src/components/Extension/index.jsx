import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import ReactHtmlParser from "react-html-parser";
import Header from "../Header";

import "./Extension.scss";

import ExtensionHeader from "./ExtensionHeader.jsx";
import ExtensionFooter from "./ExtensionFooter.jsx";

import extensionContent from "../../assets/scroll-content/extension";


export default class Extension extends Component {

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

    extensionContent.forEach((content, index, arr) => {
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
      <div className="scrolled-page">
        <Header text={this.props.text} />

        <ExtensionHeader text={this.props.text} />

        <div className="scrolled-content-header">
          <h1>{this.getLangText("ScrolledContentHeader")}</h1>
        </div>

        <div className="Description-Scroll">

          <div className="scrolled-content">

            <div className="scrolled-text">
              {extensionContent.map((content, index) => {
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
              <div style={scrolledImagesStyle}>
                <img
                  className="scrolled-item"
                  src={
                    extensionContent[this.state.bgImgId].img[this.props.lang] ||
                    extensionContent[this.state.bgImgId].img.en
                  }
                  alt="Scrolled_Item"
                />
                <Fade spy={this.state.imgId} duration={800}>
                  <img
                    className="scrolled-item"
                    style={{ zIndex: 2 }}
                    src={
                      extensionContent[this.state.imgId].img[this.props.lang] ||
                      extensionContent[this.state.imgId].img.en
                    }
                    alt="Scrolled_Item"
                  />
                </Fade>
              </div>
            </div>
          </div>
        </div>

        <ExtensionFooter text={this.props.text} />

      </div>
    );
  }
}
