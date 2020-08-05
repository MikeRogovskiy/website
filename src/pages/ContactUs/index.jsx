import React, { useState }from "react";
import ReactHtmlParser from "react-html-parser";
import FooterNavBar from "../../components/FooterNavBar"
import "./contactUs.scss";

export default function ContactUs(props){
    const [page, setPage] = useState("contact");

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
                    <iframe
                        width="520"
                        height="400"
                        frameborder="0"
                        scrolling="yes"
                        marginheight="0"
                        marginwidth="0"
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