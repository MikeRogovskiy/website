import React, { Component } from "react";
import ReactHtmlParser from "react-html-parser";
import "./popUp.scss";
import "./popUpMedia.scss";


export default class PopUpWindow extends Component{
    constructor(props) {
        super(props)
        this.handleChangePromo = this.handleChangePromo.bind(this)
        this.checkedPromo = this.checkedPromo.bind(this)
        this.goToAccount = this.goToAccount.bind(this)

        this.state = {
            inputPromo: "EASYMONTH21",
            congratulation: false
        }
    }

    handleChangePromo(event) {
        this.setState({ 
            inputPromo: event.target.value,
            congratulation: this.state.congratulation
        });
    }

    checkedPromo(e) {
        e.preventDefault();
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
                        <form className="container-pop-up_wrapper" onSubmit={this.checkedPromo} >

                            <div className="container-pop-up_wrapper_header">
                                <h2>{this.getLangText("PopUpWindow-header-title-1")}</h2>
                            </div>

                            <div className="container-pop-up_wrapper_promo-cod">
                                <input
                                    type="text"
                                    value={this.state.inputPromo}
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
                                <input type="button" value={this.getLangText("PopUpWindow-footer-add")} onClick={this.checkedPromo}  />
                            </div>
                        </form>
                    </div>

                ) : (
                    <div className="container-pop-up other-bg">
                        <div className="container-pop-up_wrapper other-bg">

                            <div className="container-pop-up_wrapper_header congratulation">
                                <h2>{this.getLangText("PopUpWindow-header-title-2")}</h2>
                            </div>

                            <div className="container-pop-up_wrapper_promo-cod">
                                <p>{this.getLangText("PopUpWindow-main-promo-cod")}</p>
                            </div>

                                <div className="container-pop-up_wrapper_footer congratulation">
                                        <input type="button" value={this.getLangText("PopUpWindow-footer-back")} onClick={this.goToAccount}/>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    };
};