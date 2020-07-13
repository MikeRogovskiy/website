import React from "react";

import Header from "../../landing-b/components/Header";
import Main from "../../landing-b/components/Main";
import Footer from "../../landing-b/components/Footer";
import "./App.scss";
import MainHeader from "../../components/MainHeader";

export default function _AppB(props) {
  return (
    <div>
      {/* <Header /> */}
      <MainHeader />
      <div className="wrapper">
        <Main text={props.text} />
      </div>
      <Footer text={props.text} />
    </div>
  );
}
