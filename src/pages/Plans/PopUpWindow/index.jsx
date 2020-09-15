import React, { Component } from "react";
import ReactHtmlParser from "react-html-parser";
import "./popUp.scss";
import "./popUpMedia.scss";


export default class PopUpWindow extends Component{
    constructor(props) {
        super(props)
        this.setInputPromo = this.setInputPromo.bind(this)
        this.handleChangePromo = this.handleChangePromo.bind(this)
        this.checkedPromo = this.checkedPromo.bind(this)
        this.goToAccount = this.goToAccount.bind(this)

        this.state = {
            inputPromo: "PROMO",
            congratulation: false
        }
    }

    setInputPromo() {
        this.setState({
            inputPromo: "",
            congratulation: this.state.congratulation
        })
    }

    handleChangePromo(event) {
        this.setState({ 
            inputPromo: event.target.value,
            congratulation: this.state.congratulation
        });
    }

    checkedPromo() {
        this.setState({ 
            congratulation: true,
            inputPromo: this.state.inputPromo
        })
    }

    goToAccount(){
        window.open('https://easy4learn.com/account?promo=' + this.state.inputPromo)
    }

    getLangText(text) {
        return ReactHtmlParser(this.props.text[text]);
    }


    render(){

        return(
            <div className="pop-up-storage">

                { !this.state.congratulation ? (
                    <div className="container-pop-up">
                        <div className="container-pop-up_wrapper">

                            <div className="container-pop-up_wrapper_header">
                                <h2>{this.getLangText("PopUpWindow-header-title-1")}</h2>
                            </div>

                            <div className="container-pop-up_wrapper_promo-cod">
                                <input
                                    type="text"
                                    value={this.state.inputPromo}
                                    onClick={this.setInputPromo}
                                    onChange={this.handleChangePromo}></input>
                            </div>

                            <div className="container-pop-up_wrapper_main">
                                <div className="main-item">
                                    <span></span>
                                    <p>{this.getLangText("2-SuperPremiumPoint")}</p>
                                </div>
                                <div className="main-item">
                                    <span></span>
                                    <p>{this.getLangText("3-SuperPremiumPoint")}</p>
                                </div>
                                <div className="main-item">
                                    <span></span>
                                    <p>{this.getLangText("4-SuperPremiumPoint")}</p>
                                </div>
                            </div>

                            <div className="container-pop-up_wrapper_footer">
                                <input type="button" value={this.getLangText("PopUpWindow-footer-input")} onClick={this.checkedPromo}  />
                            </div>
                        </div>
                    </div>

                ) : (
                    <div className="container-pop-up other-bg">
                        <div className="container-pop-up_wrapper other-bg">

                            <div className="container-pop-up_wrapper_header">
                                <h2>{this.getLangText("PopUpWindow-header-title-2")}</h2>
                            </div>

                            <div className="container-pop-up_wrapper_promo-cod">
                                <p>{this.getLangText("PopUpWindow-main-promo-cod")}</p>
                            </div>

                            <div className="container-pop-up_wrapper_footer">
                                        <input type="button" value={this.getLangText("PopUpWindow-footer-input")} onClick={this.goToAccount}/>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    };
};