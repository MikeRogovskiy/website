import React, { Component, Fragment } from "react";
import Fade from "react-reveal/Fade";
import ReactHtmlParser from "react-html-parser";
import Header from "../Header";

import "./Extension.scss";

// import { extensionImages } from '../../assets/images/products/scroll-pages/ExtensionImages';
import { extensionImages } from "../../assets/images/products/scroll-pages/ExtensionImagesStatic";
import Logo from '../../assets/images/newLogo.png';

import { extensionContent } from "../../assets/scroll-content/extension";


export default class Extension extends Component {

  state = {
    bgImgId: 0,
    imgId: 0,
  }

  imgTopOffset = 150;

  componentDidMount() {
    document.addEventListener("scroll", this.scrollPageView);
  }

  componentWillUnmount() {
    document.removeEventListener("scroll", this.scrollPageView);
  }

  getLangText(text) {
    return ReactHtmlParser(this.props.text[text]);
  }

  scrollPageView = _ => {
    const pos = window.pageYOffset;

    extensionContent.forEach((content, i, arr) => {
      const el = content.parentRef;
      const nextEl = arr[i + 1] && arr[i + 1].parentRef;
      if (
        this.state.imgId !== i &&
        (pos + 250) + this.imgTopOffset >= el.offsetTop &&
        (nextEl ? (pos + 250) + this.imgTopOffset < nextEl.offsetTop : true)
      ) {
        this.setState(old => ({
          bgImgId: old.imgId,
          imgId: i
        }));
      }
    });
  };

  render() {
    return (
      <Fragment>
        <Header text={this.props.text} />

        <header className="getStarted-header">
          <div className="wrapper-getStarted">
            <div>
              <img src={Logo} className="getStarted-logo"></img>
              <h1 className="getStarted-title">{this.getLangText("GetStartedText")}</h1>
            </div>
            <div className="getStarted-button">
              <a
                className="started-button top"
                href="https://chrome.google.com/webstore/detail/lnjampkehdeoilenmkceiganjofpahbb"
                target="_blank"
                rel="noopener noreferrer"
              >
               <span>{this.getLangText("GetStartedButton")}</span>
              </a>
            </div>
            <div>
              <p className="getStarted-subtitle">{this.getLangText("GetStartedBottomText")}</p>
            </div>
          </div>
        </header>

        <div className="Description-Scroll">

          <div style={{ display: "flex" }}>

            <div style={{ flex: "0 0 50%", paddingLeft: "5%" }}>
              {extensionContent.map((content, i) => {
                return (
                  <div
                    className="extension-block"
                    ref={ref => {
                      content.parentRef = ref;
                    }}
                    key={i}
                  >
                    <div className="content">
                      <div className="extension-header content">
                        <div>
                          <div className="content-header">
                            {content.header}
                          </div>
                          <div className="content-body">
                            {content.body}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div style={{ flex: "0 0 50%", position: "relative" }}>
              <div
                style={{
                  width: "100%",
                  position: "sticky",
                  left: 0,
                  top: this.imgTopOffset
                }}
              >
                <img
                  className="description-img"
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    zIndex: 1
                  }}
                  src={extensionImages[this.state.bgImgId].src}
                />
                <Fade spy={this.state.imgId}>
                  <img
                    className="description-img"
                    style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      width: "100%",
                      zIndex: 2
                    }}
                    src={extensionImages[this.state.imgId].src}
                    alt="Extension_Image"
                  />
                </Fade>
              </div>
            </div>


          </div>
        </div>
      </Fragment>
    );
  }
}
