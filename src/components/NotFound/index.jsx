import React, { Component, Fragment } from "react";
import { Link } from "@reach/router";

import ReactHtmlParser from "react-html-parser";

import MainHeader from '../MainHeader';
import "./NotFound.scss";

export default class NotFound extends Component {


    getLangText(text) {
        return ReactHtmlParser(this.props.text[text]);
    }

    render() {
        return (
            <Fragment>
                <MainHeader />
                <div className="NotFound">
                    <div>
                        <h1>{this.getLangText("NotFound")}</h1>
                    </div>

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
