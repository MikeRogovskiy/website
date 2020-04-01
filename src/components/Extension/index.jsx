import React, { Component } from "react";
import ReactHtmlParser from "react-html-parser";
import MainHeader from "../MainHeader";

import "./Extension.scss";

import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import WithScrollContent from "../WithScrollContent";

import extensionContent from "../../assets/scroll-content/extension";


export default class Extension extends Component {

  getLangText = (text) => {
    return ReactHtmlParser(this.props.text[text]);
  }

  render() {
    return (
      <div>
        <MainHeader />

        <Header text={this.props.text} />
        <WithScrollContent getLangText={this.getLangText} scrollContent={extensionContent} lang={this.props.lang}/>
        <Footer text={this.props.text} />
      </div>
    );
  }
}
