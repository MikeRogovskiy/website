import React from "react";
import { Router } from "@reach/router";
import Navbar from "../Navbar";
import Home from "../Home";
import Privacy from '../Privacy';
import Extension from "../Extension";
import Player from "../Player";
import Prices from "../Prices";
import PricesTest from "../PricesTest";
import Blog from "../Blog";
import NotFound from '../NotFound';

// import BtnTop from "../BtnTop";
import ScrollToTop from "../ScrollToTop";
import Helmet from "react-helmet";

export default class App extends React.Component {

  urlsWithoutChangingTheLanguage = [/^\/([^/]+\/)*privacy.*/g];


  render() {
    if (typeof window.gtag === "function") {
      window.gtag("config", "UA-4027447-9", {
        page_title: document.title,
        page_location: this.props.location.href,
        page_path: this.props.location.pathname + this.props.location.search.text
      });
    }

    return (
      <div className="Main">
        <Helmet htmlAttributes={{ lang: this.props.language }} />
        <Navbar
          curLang={this.props.language}
          langList={this.props.langList}
          handleLanguage={this.props.handleLanguage}
          text={this.props.text.NavBar}
          noUseLangSelect={this.urlsWithoutChangingTheLanguage.some(
            u => this.props.location.pathname.match(u) !== null
          )}
        ></Navbar>
        <Router>
          <ScrollToTop path="/">
            <Home path="/" text={this.props.text.HomePage}></Home>
            <Privacy path="/privacy" text={this.props.text}></Privacy>
            <Extension path="/extension/" text={this.props.text.ExtensionPage} lang={this.props.language}/>
            <Player path="/player/" text={this.props.text.PlayerPage} />
            <Prices path="/prices/" text={this.props.text.PricesPage} />
            <PricesTest path="/prices-b/" text={this.props.text.PricesTestPage} />
            <Blog path="/blog/*"></Blog>
            <NotFound path="*" text={this.props.text.NotFoundPage}></NotFound>
            {/* <Redirect from="/" to="/" default noThrow></Redirect> */}
          </ScrollToTop>
        </Router>
        {/* <BtnTop></BtnTop> */}
      </div>
    );
  }
}
