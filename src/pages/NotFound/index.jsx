import React, { Component, Fragment } from "react";
import { Link } from "@reach/router";

import ReactHtmlParser from "react-html-parser";

import MainHeader from '../../components/MainHeader';
import "./NotFound.scss";

import notFoundImg from "../../assets/images/404.svg";

export default class NotFound extends Component {


    getLangText(text) {
        return ReactHtmlParser(this.props.text[text]);
    }

    render() {
        return (
            <Fragment>
                <MainHeader />
                <div className="NotFound">
                    <img src={notFoundImg} />
                    <h1>{this.getLangText("NotFoundTitle")}</h1>
                    <p>{this.getLangText("NotFoundSubtitle")}</p>
                    <Link to="/">
                        <div className="button-homepage">
                            {this.getLangText("HomePage")}
                        </div>
                    </Link>
                </div>
            </Fragment>
        );
    }
}
