import React from "react";
import { Router } from "@reach/router";
import Navbar from "../Navbar";
import Blog from "../Blog";
import ScrollToTop from "../ScrollToTop";
import Helmet from "react-helmet";
import { Home, Extension, NotFound, Plans, Player, Privacy, PlansTest } from '../../pages';


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
            <Plans path="/plans/" text={this.props.text.PlansPage} />
            <PlansTest path="/plans-b/" text={this.props.text.PlansPage_b} />
            <Blog path="/blog/*"></Blog>
            <NotFound path="*" text={this.props.text.NotFoundPage}></NotFound>
          </ScrollToTop>
        </Router>
      </div>
    );
  }
}
