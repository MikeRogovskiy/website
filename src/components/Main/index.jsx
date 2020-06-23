import React from "react";
import { Router } from "@reach/router";
import Navbar from "../Navbar";
import Blog from "../Blog";
import ScrollToTop from "../ScrollToTop";
import Helmet from "react-helmet";
import FooterNavBar from "../FooterNavBar";
import {
  AnalyticsRedirect,
  Extension,  ExtensionInstruction, ExtensionInnerInstruction, ExtenstionAdvertisement,
  Home, HomeB,
  NotFound,
  Plans,
  Player, PlayerInstruction, PlayerAnimation,
  Privacy
} from '../../pages';

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
          <ScrollToTop                  path="/">
            <AnalyticsRedirect          path="/analytics-redirect/" />
            <Home                       path="/" text={this.props.text.HomePage} />
            <HomeB                      path="/B/" />
            <HomeB                      path="/C/" />
            <Privacy                    path="/privacy" text={this.props.text} />
            <Extension                  path="/extension/" text={this.props.text.ExtensionPage} lang={this.props.language} />
            <ExtensionInstruction       path="/extension-instruction-static/" text={this.props.text.ExtensionInstructionPage} lang={this.props.language} />
            <ExtensionInstruction       path="/extension-instruction/" text={this.props.text.ExtensionInstructionPage} lang={this.props.language} />
            <ExtensionInnerInstruction  path="/extension-inner-instruction/" />
            <ExtenstionAdvertisement    path="/extension-advertisement/" />
            <Player                     path="/player/" text={this.props.text.PlayerPage} />
            <PlayerAnimation            path="/player-animation/" text={this.props.text.PlayerAnimation} />
            <PlayerInstruction          path="player-instruction-youtube/" />
            <PlayerInstruction          path="/instruction-youtube-desctop/" />
            <Plans                      path="/plans/" text={this.props.text.PlansPage} />
            <Blog                       path="/blog/*" />
            <NotFound                   path="*" text={this.props.text.NotFoundPage} />
          </ScrollToTop>
        </Router>
        <FooterNavBar text={this.props.text.FooterNavBar}></FooterNavBar>
      </div>
    );
  };
};
