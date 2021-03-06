import React from "react";
import chromeStoreSvg from "../../../assets/images/home/chromeStore.svg";
import "./LoadExtensionBtn.scss";

export default function LoadExtensionBtn (props){
    const LoadExtensionBtnDesktop = () => {
        return (
            <div className="button-group button-group-1">
                <a
                    className="button-install button-chrome"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://chrome.google.com/webstore/detail/easylangapp-beta/cgelaojeiipaehoiiabkbickcpmpanel"
                    onClick={()=>{
                        window.gtag(props.gtagName, props.gtagClick,{
                        event_category: props.gtagCategory
                        })
                    }}
                >
                    <span className="button-chrome-wrapper">
                        <img
                            src={chromeStoreSvg}
                            alt="chrome-store"
                            className="icon button-chrome-icon"
                        />
                        {props.text}
                    </span>
                </a>
            </div>
        )
    };

    const LoadExtensionBtnMobile = () => {
        return (
            <div className="button-group button-group-1">
                <a
                    className="button-install button-chrome"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://chrome.google.com/webstore/detail/easylangapp-beta/cgelaojeiipaehoiiabkbickcpmpanel"
                    onClick={(event)=>{
                        props.setPopupVisibility(true);
                        event.preventDefault();
                        window.gtag(props.gtagName, props.gtagClick,{
                        event_category: props.gtagCategory
                        })
                    }}
                >
                    <span className="button-chrome-wrapper">
                        <img
                            src={chromeStoreSvg}
                            alt="chrome-store"
                            className="icon button-chrome-icon"
                        />
                        {props.text}
                    </span>
                </a>
            </div>
        )
    };

    return(
        <div>
            { props.isMobile ? <LoadExtensionBtnMobile />  : <LoadExtensionBtnDesktop /> }
        </div>
    )
}
