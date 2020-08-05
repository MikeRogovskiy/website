import React from "react";
import ReactHtmlParser from "react-html-parser";
import { Map, GoogleApiWrapper } from 'google-maps-react';
import "./contactUs.scss";

export default function ContactUs(props){

    const getLangText = (text) => {
        return ReactHtmlParser(props.text[text]);
    };

    // const mapStyles = {
    //     width: '20%',
    //     height: '20%'
    // };

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
                </div>
                <div className="contact-us_container_map">
                    {/* <Map
                        google={props.google}
                        zoom={14}
                        style={mapStyles}
                        initialCenter={{
                        lat: -1.2884,
                        lng: 36.8233
                        }}
                    /> */}
                    <h2>{getLangText("title2")}</h2>
                    <p>{getLangText("text1")}</p>
                </div>
            </div>
        </div>
    )
}

// const googleMapsKey = `AIzaSyBNCtWRo3LiD09QfUkwbHEYGvgdrec3Mtc`;

// export default GoogleApiWrapper({
//     apiKey: googleMapsKey
//   })(document.querySelector(".general-content-container"));

