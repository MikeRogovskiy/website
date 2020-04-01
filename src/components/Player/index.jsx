import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import ReactHtmlParser from "react-html-parser";
import MainHeader from "../MainHeader";

import "./Player.scss";

import { playerImages } from "../../assets/images/products/scroll-pages/PlayerImagesStatic";
import repeat from '../../assets/scroll-content/repeat.png';
import subtitles from '../../assets/scroll-content/subtitles.png';

import PlayerHeader from "./PlayerHeader.jsx";
import PlayerFooter from "./PlayerFooter.jsx";


export default class Player extends Component {

  state = {
    bgImgId: 0,
    imgId: 0,
  }

  imgTopOffset = 150;

  getLangText(text) {
    return ReactHtmlParser(this.props.text[text]);
  }

  playerContent = [
    {
    header: <h2>{this.getLangText("1-SlidePlayerHeader")}</h2>,
      body: <p>{this.getLangText("1-SlidePlayerBody")}</p>,
      img: playerImages[0].src
    },
    {
      header: <h2>{this.getLangText("2-SlidePlayerHeader")}</h2>,
      body: <p>{this.getLangText("2-SlidePlayerBody")}</p>,
      img: playerImages[1].src
    },
    {
      header: <h2>{this.getLangText("3-SlidePlayerHeader")}</h2>,
      body: <p>{this.getLangText("3-SlidePlayerBody")}</p>,
      img: playerImages[2].src
    },
    {
      header: <h2>{this.getLangText("4-SlidePlayerHeader")}</h2>,
      body: <p>{this.getLangText("4-SlidePlayerBody")}</p>,
      img: playerImages[3].src
    },
    {
      header: <h2>{this.getLangText("5-SlidePlayerHeader")}</h2>,
      body: (
        <>
          <p>{this.getLangText("5-SlidePlayerBody")}</p>
          <img src={subtitles} alt="subtitles_image" style={{ width: "65%", paddingTop: "5%" }}/>
        </>
      ),
      img: playerImages[4].src
    },
    {
      header: <h2>{this.getLangText("6-SlidePlayerHeader")}</h2>,
      body: (
              <>
                <p>{this.getLangText("6-SlidePlayerBody")}</p>
                <img src={repeat} alt="subtitles_image" style={{ width: "65%", paddingTop: "5%" }}/>
              </>
      ),
      img: playerImages[5].src
    },
    {
      header: <h2 style={{ paddingTop: "75px" }}>{this.getLangText("7-SlidePlayerHeader")}</h2>,
      body: <p>{this.getLangText("7-SlidePlayerBody")}</p>,
      img: playerImages[6].src
    },
    {
      header: <h2>{this.getLangText("8-SlidePlayerHeader")}</h2>,
      body: <p>{this.getLangText("8-SlidePlayerBody")}</p>,
      img: playerImages[7].src
    },
    {
      header: <h2>{this.getLangText("9-SlidePlayerHeader")}</h2>,
      body: <p>{this.getLangText("9-SlidePlayerBody")}</p>,
      img: playerImages[8].src
    },
    {
      header: <h2>{this.getLangText("10-SlidePlayerHeader")}</h2>,
      body: <p>{this.getLangText("10-SlidePlayerBody")}</p>,
      img: playerImages[9].src
    }
  ];

  componentDidMount() {
    document.addEventListener("scroll", this.scrollPageView);
  }

  componentWillUnmount() {
    document.removeEventListener("scroll", this.scrollPageView);
  }

  scrollPageView = () => {
    const pos = window.pageYOffset;

    this.playerContent.forEach((content, i, arr) => {
      const el = content.parentRef;
      const nextItem = arr[i + 1] && arr[i + 1].parentRef;

      if (
        this.state.imgId !== i &&
        (pos + 250) + this.imgTopOffset >= el.offsetTop &&
        (nextItem ? (pos + 250) + this.imgTopOffset < nextItem.offsetTop : true)
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
      <div>
        <MainHeader />
        <PlayerHeader text={this.props.text} />


        {/* Player Scroll Content */}
        <div className="scrolled-content-header">
          <h1>{this.getLangText("ScrolledContentPlayerHeader")}</h1>
        </div>

 
        <div className="Description-Scroll">

          <div style={{ display: "flex" }}>

            <div style={{ flex: "0 0 35%", paddingRight: "7%" }}>
              {this.playerContent.map((content, i) => {
                return (
                  <div
                    className="player-block"
                    ref={ref => content.parentRef = ref}
                    key={i}
                  >
                    <div className="player-content">
                      <div className="extension-header playercontent">
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

            <div style={{ flex: "0 0 57%", position: "relative" }}>
              <div
                style={{
                  width: "100%",
                  position: "sticky",
                  left: 0,
                  top: this.imgTopOffset
                }}
              >
                <img
                  className="scrolled-item"
                  src={playerImages[this.state.bgImgId].src}
                  alt="Scrolled_Item"
                />
                <Fade spy={this.state.imgId} duration={800}>
                  <img
                    className="scrolled-item"
                    style={{ zIndex: 2 }}
                    src={playerImages[this.state.imgId].src}
                    alt="Scrolled_Item"
                  />
                </Fade>
              </div>
            </div>
          </div>
        </div>

        <PlayerFooter text={this.props.text} />
      </div>
    );
  }
}


