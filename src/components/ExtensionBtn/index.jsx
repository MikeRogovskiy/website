import React from "react";
import chromeStoreSvg from "../../assets/images/home/chromeStore.svg";

export default function ExtensionBtn (props){
    return(
        <div className="extension-download-btn">
            <img src={chromeStoreSvg}></img>
            
        </div>
    )
}