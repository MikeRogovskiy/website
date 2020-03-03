import React, { Component, Fragment } from 'react';
import ReactHtmlParser from "react-html-parser";
import Header from '../Header';
import $ from 'jquery';

import './Player-scroll.scss';

import chromeStoreSvg from "../../assets/images/home/chromeStore.svg";
import number_1 from '../../assets/images/products/extension/number_1.png';
import number_2 from '../../assets/images/products/extension/number_2.png';
import number_3 from '../../assets/images/products/extension/number_3.png';
import number_4 from '../../assets/images/products/extension/number_4.png';
import player_background from '../../assets/images/products/player/player_background.png';


import { playerImages } from '../../assets/images/products/scroll-pages/PlayerImages';



const scrollSize = window.matchMedia("(min-width: 800px)");


export default class PlayerScroll extends Component {

    getLangText(text) {
        return ReactHtmlParser(this.props.text[text]);
    }

    componentDidMount() {
        // Function to images appear on scroll
        const scrollPageView = () => {
            $(document).scroll(function () {
                var pos = $(document).scrollTop();
                if (pos > 300 && pos < 850) {
                    hideAll("c1");
                    $("#c1").fadeIn(700);
                }
                if (pos > 850 && pos < 1300) {
                    // hideAll("c2");
                    $("#c2").fadeIn(700);
                    $("#c3").fadeOut(700);
                }
                if (pos > 1400 && pos < 1900) {
                    // hideAll("c3");
                    $("#c2").fadeOut(700);
                    $("#c3").fadeIn(700);
                }
                if (pos < 300) {
                    $("#c1").fadeOut(300);
                }
            });

            function hideAll(exceptMe) {
                $(".left").each(function (i) {
                    if ($(this).attr("id") == exceptMe) return;
                    $(this).fadeOut();
                });
            }
        }


        const defaultPageView = () => {
            $("div").removeClass("left content");
            $("div").removeAttr('id', 'c1');
            $("div").removeAttr('id', 'c2');
            $("div").removeAttr('id', 'c3');
        };

        const toScroll = (scrollSize) => {
            if (scrollSize.matches) { // If media query matches
                return scrollPageView();
            } else {
                return defaultPageView();
            }
        }


        toScroll(scrollSize); // Call listener function at run time
        scrollSize.addListener(toScroll); // Attach listener function on state changes
    }

    componentWillUnmount() {
        scrollSize.removeListener(this.toScroll); // Attach listener function on state changes
    }

    render() {

        const ScrollBlock = playerImages.map((img) => {
            console.log(img);
            return (
                <div className="flex-parent extension-block content" key={img.id}>
                    <div className="flex-child">
                        <div className="extension-header">
                            <div className="point"><img src={number_4} /></div>
                            <div>
                                <h2>{this.getLangText("ExtensionFourthHeader")}</h2>

                                <p>{this.getLangText("ExtensionFourthText_1")}</p>
                                <p>{this.getLangText("ExtensionFourthText_2")}</p>
                                <p>{this.getLangText("ExtensionFourthText_3")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex-child description-image left" id={img.id}>
                        <img src={img.src}
                            alt="Extension_Image_To_Scroll"
                            style={{
                                marginTop: img.top,
                                marginLeft: img.left
                            }} />
                    </div>
                </div>
            )
        });


        return (
            <Fragment>
                <Header text={this.props.text} />
                <div className="Description-Scroll">

                    <div className="flex-parent extension-block">
                        <div>
                            <h2>{this.getLangText("ExtensionHeader")}</h2>
                            <p>
                                {this.getLangText("ExtensionTopText")}
                            </p>
                        </div>
                    </div>

                    <div className="flex-parent extension-block">
                        <div className="flex-child">
                            <div className="extension-header button-header">
                                <div className="point"><img src={number_1} /></div>
                                <div>
                                    <h2>{this.getLangText("ExtensionFirstHeader")}</h2>
                                </div>
                            </div>
                        </div>
                        <div className="flex-child button-extension">
                            <div className="button-started-extension">
                                <a className="get-started-button-extension top"
                                    href="https://chrome.google.com/webstore/detail/easylangapp/enhklinppkbachhbnjjpdccklacpidfl"
                                    target="_blank" rel="noopener noreferrer">
                                    <img src={chromeStoreSvg} alt="Chrome-store" className="icon get-started-button__icon" />
                                    <span className="tag">{this.getLangText("AddToChromeButton")}</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="flex-parent extension-block">
                        <div className="flex-child content">
                            <div className="extension-header">
                                <div className="point"><img src={number_2} /></div>
                                <div>
                                    <h2>{this.getLangText("ExtensionSecondHeader")}</h2>

                                    <p>{this.getLangText("ExtensionSecondText_1")}</p>
                                    <p>{this.getLangText("ExtensionSecondText_2")}</p>
                                    <p>{this.getLangText("ExtensionSecondText_3")}</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex-child description-image left" id="c1">
                            <img src={player_background} alt="Extension_Image" />
                        </div>
                    </div>

                    {ScrollBlock}

                    {/* <div className="flex-parent extension-block">
                        <div className="flex-child content">
                            <div className="extension-header">
                                <div className="point"><img src={number_3} /></div>
                                <div>
                                    <h2>{this.getLangText("ExtensionThirddHeader")}</h2>

                                    <p>{this.getLangText("ExtensionThirdText")}</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex-child description-image left" id="c2">
                            <img className="description-img"
                                src={playerImages[0].src}
                                alt="Extension_Image_To_Scroll"
                                style={{
                                    marginTop: playerImages[0].top + "px",
                                    marginLeft: playerImages[0].left + "px",
                                }} />
                        </div>
                    </div>

                    <div className="flex-parent extension-block">
                        <div className="flex-child">
                            <div className="extension-header">
                                <div className="point"><img src={number_4} /></div>
                                <div>
                                    <h2>{this.getLangText("ExtensionFourthHeader")}</h2>

                                    <p>{this.getLangText("ExtensionFourthText_1")}</p>
                                    <p>{this.getLangText("ExtensionFourthText_2")}</p>
                                    <p>{this.getLangText("ExtensionFourthText_3")}</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex-child description-image left" id="c3">
                            <img src={playerImages[1].src}
                                alt="Extension_Image_To_Scroll"
                                style={{
                                    marginTop: playerImages[1].top + "px",
                                    marginLeft: playerImages[1].left + "px",
                                }} />
                        </div>
                    </div> */}

                    <div className="flex-child button-extension footer-button">
                        <div className="button-started-extension">
                            <a className="get-started-button-extension-bottom top"
                                href="https://chrome.google.com/webstore/detail/easylangapp/enhklinppkbachhbnjjpdccklacpidfl" target="_blank"
                                rel="noopener noreferrer">
                                <img src={chromeStoreSvg} alt="Chrome-store" className="icon get-started-button__icon" />
                                <span className="tag">{this.getLangText("AddToChromeButton")}</span>
                            </a>
                        </div>
                    </div>

                </div>
            </Fragment>
        )
    }
}









