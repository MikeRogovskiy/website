import React, { Component } from "react";
import ReactHtmlParser from "react-html-parser";
import Header from "../Header";

import testScrollContent from "../../assets/scroll-content/test";

import "./Test.scss";

import TestHeader from "./TestHeader.jsx";
import TestFooter from "./TestFooter.jsx";

import WithScrollContent from "../WithScrollContent";

export default class Test extends Component {

  getLangText = (text) => {
    return ReactHtmlParser(this.props.text[text]);
  }

  render() {

    return (
      <div>
        <Header text={this.props.text} />

        <TestHeader text={this.props.text} />
        <WithScrollContent getLangText={this.getLangText} scrollContent={testScrollContent} />
        <TestFooter text={this.props.text} />
      </div>
    );
  }
}