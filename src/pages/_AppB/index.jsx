import React from "react";
import Main from "../../landing-b/components/Main";
import Footer from "../../landing-b/components/Footer";
import "./App.scss";
import MainHeader from "../../components/MainHeader";

export default function _AppB(props) {

  localStorage.setItem("page", "additionalLanding")

  return (
    <div>
      <MainHeader />
      <div className="wrapper-landing">
        <Main text={props.text} />
      </div>
      <Footer text={props.text} />
    </div>
  );
}
