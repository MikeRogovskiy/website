import React from "react";
import ReactHtmlParser from "react-html-parser";
import { Map, GoogleApiWrapper } from 'google-maps-react';
import "./contactUs.scss";

export default function ContactUs(props){

    const getLangText = (text) => {
        return ReactHtmlParser(props.text[text]);
    };



    return(
        <div id="contact-us">
            <div className="general-content-container">
                <h2>{getLangText("title1")}</h2>
                <p>{getLangText("theName")}</p>
                <p>{getLangText("index")}</p>
                <p>{getLangText("adress")}</p>
                <p>{getLangText("email")}</p>
                <p><a href="tel:+375 29 767-35-25">{getLangText("phone")}</a></p>
                {/* <Map google={this.props.google} zoom={14}>
 
                    <Marker onClick={this.onMarkerClick}
                            name={'Current location'} />
            
                    <InfoWindow onClose={this.onInfoWindowClose}>
                        <div>
                        <h1>{this.state.selectedPlace.name}</h1>
                        </div>
                    </InfoWindow>
                </Map> */}
                <h2>{getLangText("title2")}</h2>
                <p>{getLangText("text1")}</p>
            </div>
        </div>
    )
}

