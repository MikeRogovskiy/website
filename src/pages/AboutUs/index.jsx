import React, { useState }from "react";
import ReactHtmlParser from "react-html-parser";
import facebook from "../../assets/images/about/fb.svg";
import vkontakte from "../../assets/images/about/vk.svg";
import instagram from "../../assets/images/about/instagram.svg";
import "./aboutUs.scss";

export default function AboutUs(props){

    const getLangText = (text) => {
        return ReactHtmlParser(props.text[text]);
    };

    return(
        <div className="about-us">
            <div className="about-us_container wrapper">
                <div className="about-us_container_head">
                    <h2>{getLangText("title1")}</h2>
                    <p>{getLangText("text1")}</p>
                </div>
                <div className="about-us_container_main">
                    <h2>{getLangText("title2")}</h2>
                    <p>{getLangText("text2")}</p>
                    <p>{getLangText("text2.1")}</p>

                    <p>{getLangText("text3")}</p>
                    <p>{getLangText("text3.1")}</p>
                    <ul>
                        {getLangText("text3.1.list")}
                    </ul>
                </div>
                <div className="about-us_container_footer">
                    <h2>{getLangText("title4")}</h2>
                    <a href={getLangText("linkInstagram")}><img src={instagram}></img></a>
                    <a href={getLangText("linkFB")}><img src={facebook}></img></a>
                    <a href={getLangText("linkVK")}><img src={vkontakte}></img></a>
                </div>
            </div>
        </div>
    )
}