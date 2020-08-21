import React from "react";
import ReactHtmlParser from "react-html-parser";
import FooterNavBar from "../../components/FooterNavBar";
import email from "../../assets/images/contact/email.png";
import call from "../../assets/images/contact/call.svg";
import facebook from "../../assets/images/contact/facebook@2x.svg";
import vkontakte from "../../assets/images/contact/vk@2x.svg";
import instagram from "../../assets/images/contact/Inst@2x.svg";
import "./contactUs.scss";
import "./contactUsMedia.scss";

export default function ContactUs(props){
    const page = "contact";

    const getLangText = (text) => {
        return ReactHtmlParser(props.text[text]);
    };

    return(
        <div className="contact-us">
            <div className="contact-us_container">
                <div className="contact-us_container_text">
                    <div className="contact-us_container_text_block">
                        <h2>{getLangText("title1")}</h2>
                        <p>{getLangText("theName")}</p>
                        <p>{getLangText("index")}</p>
                        <p>{getLangText("adress")}</p>
                    </div>

                    <div className="contact-us_container_text_links">

                        <div className="contact-us_container_text_links_animation">
                            <a className="imageLink" href="mailto:support@easylang.app">
                                <img src={email}/>
                            </a>
                            <a  className="textAppear" href="mailto:support@easylang.app">{getLangText("email")}</a>
                        </div>

                        <div className="contact-us_container_text_links_animation">
                            <a className="imageLink" href="tel:+375 29 767-35-25">
                                <img src={call}/>
                            </a>
                            <a  className="textAppear" href="tel:+375 29 767-35-25">{getLangText("phone")}</a>
                        </div>

                    </div>
                    <div className="contact-us_container_text_socials">
                      <h2>{getLangText("title2")}</h2>
                      <p>{getLangText("text1")}</p>
                      <a href={getLangText("linkInstagram")}><img src={instagram}></img></a>
                      <a href={getLangText("linkFB")}><img src={facebook}></img></a>
                      <a href={getLangText("linkVK")}><img src={vkontakte}></img></a>
                    </div>
                </div>
                <div className="contact-us_container_map">
                    <iframe
                        frameBorder="0"
                        scrolling="yes"
                        marginHeight="0"
                        marginWidth="0"
                        id="gmap_canvas"
                        src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=vulica%20Talbuchina%202,%20Minsk%20Minsk+()&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                    </iframe>
                </div>
            </div>
            <footer className="getStarted-footer">
                <FooterNavBar
                    text={props.text}
                    page={page}
                />
            </footer>
        </div>
    )
}
