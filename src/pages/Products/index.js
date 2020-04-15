import React from "react";
import { Link } from "@reach/router";
import ReactHtmlParser from "react-html-parser";

import productsFirstNumber from "../../assets/images/products/productsFirstNumber.svg";
import productsSecondNumber from "../../assets/images/products/productsSecondNumber.svg";
import devices_image from "../../assets/images/devices_image.png";


import "./Products.scss";
import MainHeader from "../../components/MainHeader";


export default class Products extends React.Component {

    getLangText(text) {
        return ReactHtmlParser(this.props.text[text]);
    }

    render() {
        return (
            <div className="Products">
                <MainHeader text={this.props.text} />
                <div className="products-header-block">
                    <h1>{this.getLangText('ProductsHeader')}</h1>
                    <p>{this.getLangText("ProductsTopHeader")}</p>
                    <p>{this.getLangText("ProductsTopText")}</p>
                </div>

                <div className="products-container">
                    <div className="product-block">
                        <div className="product-block-description">
                            <div className="product-number">
                                <img className="product-number-img" src={productsFirstNumber} alt="first number" />
                            </div>
                            <div className="product-about">
                                <Link to="extension/">
                                    <p className="product-description-header .extension-link">{this.getLangText("ExtensionForBrowser")}</p>
                                </Link>
                                <p className="product-description-text">
                                    {this.getLangText("ProductExtensionDescription")}
                                </p>
                            </div>
                        </div>
                        <div className="product-block-download">
                            <a
                                className="product-download-button"
                                href="https://chrome.google.com/webstore/detail/easylangapp-beta/cgelaojeiipaehoiiabkbickcpmpanel"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {this.getLangText("Add")}
                            </a>
                        </div>
                    </div>

                    <div className="product-block">
                        <div className="product-block-description">
                            <div className="product-number">
                                <img className="product-number-img" src={productsSecondNumber} alt="second number" />
                            </div>
                            <div className="product-about">
                                <p className="product-description-header">{this.getLangText("ProductsTutor")}</p>
                                <p className="product-description-text">
                                    {this.getLangText("ProductTutorDescription")}
                                </p>
                            </div>
                        </div>
                        <div className="product-block-download">
                            <a
                                className="product-download-button"
                                href="https://easy4learn.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {this.getLangText("GetStarted")}
                            </a>
                        </div>
                    </div>
                </div>

                <div className="devices">
                    <img src={devices_image} alt="devices_image" />
                </div>
                <div className="description-bottom-block">
                    <p>
                        {this.getLangText('BottomInfoText')}
                    </p>
                </div>
                {/* 

                <footer className="get-started-footer">
                    <div className="footer-links">
                        <ul>
                            <li>
                                <Link
                                    to="about"
                                    className="footer-link"
                                    onClick={this.closeMenu}
                                >
                                    {this.props.text.About}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="products"
                                    className="footer-link"
                                    onClick={this.closeMenu}
                                >
                                    {this.props.text.Products}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="download"
                                    className="footer-link"
                                    onClick={this.closeMenu}
                                >
                                    {this.props.text.Download}
                                </Link>
                            </li>
                            <li>
                                <p>
                                    <a className="footer-mail" href="mailto:support@easylang.by">support@easylang.by</a>
                                </p>
                            </li>
                        </ul>
                    </div>
                </footer> */}
            </div>
        );
    }
};
