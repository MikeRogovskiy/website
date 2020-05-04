import React, { Component } from "react";
import ReactHtmlParser from "react-html-parser";
import "./popUp.scss";
import "./popUpMedia.scss";

export default class PopUpWindow extends Component{

    getLangText(text) {
        return ReactHtmlParser(this.props.text[text]);
    }

    render(){

        return(
            <div className="pop-up-storage">
                <div className="container-pop-up">
                    <div className="container-pop-up_wrapper">
                        <div className="container-pop-up_wrapper_header">
                            <h2>{this.getLangText("PopUpWindow-header-title")}</h2>
                            <p>{this.getLangText("PopUpWindow-header-text")}</p>
                        </div>
                        <div className="container-pop-up_wrapper_main">
                            <h1>{this.getLangText("PopUpWindow-main-key")}</h1>
                            <p>{this.getLangText("PopUpWindow-main-title")}</p>
                            <p>{this.getLangText("PopUpWindow-main-text")}</p>
                        </div>
                        <div className="container-pop-up_wrapper_footer">
                            <p>{this.getLangText("PopUpWindow-footer-text")}</p>
                            <input type="button" value={this.getLangText("PopUpWindow-footer-input")} onClick={this.props.action}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};