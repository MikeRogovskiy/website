import React from "react";
import ReactHtmlParser from "react-html-parser";
import SimpleMap from "../../components/SimpleMap";
import "./contactUs.scss";

export default function ContactUs(props){

    const getLangText = (text) => {
        return ReactHtmlParser(props.text[text]);
    };

    return(
        <div className="contact-us">
            <div className="contact-us_container">
                <div className="contact-us_container_text">
                    <h2>{getLangText("title1")}</h2>
                    <p>{getLangText("theName")}</p>
                    <p>{getLangText("index")}</p>
                    <p>{getLangText("adress")}</p>
                    <p>{getLangText("email")}</p>
                    <p><a href="tel:+375 29 767-35-25">{getLangText("phone")}</a></p>
                    <h2>{getLangText("title2")}</h2>
                    <p>{getLangText("text1")}</p>
                </div>
                <div className="contact-us_container_map">
                    <SimpleMap />
                </div>
            </div>
        </div>
    )
}