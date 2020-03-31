import React, { Component } from "react";
import ReactHtmlParser from "react-html-parser";
import Header from "../Header";

import testScrollContent from "../../assets/scroll-content/test";

import "./Test.scss";

import TestHeader from "./TestHeader.jsx";
import TestFooter from "./TestFooter.jsx";

import ScrollContent from "../ScrollContent";

export default class Test extends Component {

  getLangText = (text) => {
    console.log(this.props)
    return ReactHtmlParser(this.props.text[text]);
  }

  render() {

    return (
      <div>
        <Header text={this.props.text} />

        <TestHeader text={this.props.text} />
        <ScrollContent getLangText={this.getLangText} scrollContent={testScrollContent} />
        <TestFooter text={this.props.text} />

      </div>
    );
  }
}