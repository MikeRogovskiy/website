import React from "react";
import { Router } from "@reach/router";
import Navbar from "../Navbar";
import Blog from "../Blog";
import ScrollToTop from "../ScrollToTop";
import Helmet from "react-helmet";
import {
  Extension,
  ExtensionInstruction,
  ExtensionInnerInstruction,
  ExtenstionAdvertisement,
  Home,
  HomeB,
  NotFound,
  Plans,
  Player,
  PlayerInstruction,
  PlayerAnimation,
  Privacy,
  _AppB,
  ArticlesPage,
  ContactUs,
  AboutUs,
  FarewellExtensionPage,
} from "../../pages";

export default class App extends React.Component {
  urlsWithoutChangingTheLanguage = [/^\/([^/]+\/)*privacy.*/g];

  render() {
    if (typeof window.gtag === "function") {
      const searchText = this.props.location.search.text || "";
      window.gtag("config", "UA-4027447-9", {
        page_title: document.title,
        page_location: this.props.location.href,
        page_path: this.props.location.pathname + searchText,
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
            (u) => this.props.location.pathname.match(u) !== null
          )}
          location={this.props.location}
        />

        <Router>
          <ScrollToTop path="/">
            <AboutUs path="about" text={this.props.text.AboutUs} />
            <ArticlesPage
              path="/reasons-to-study-english"
              text={this.props.text.BlogPage}
            />
            <ArticlesPage
              path="/start-learning-english-with-elang"
              text={this.props.text.BlogPage}
            />
            <ArticlesPage
              path="/free-english-learnings-apps"
              text={this.props.text.BlogPage}
            />
            <Blog path="/blog" text={this.props.text.BlogPage} />
            <ContactUs path="/contact" text={this.props.text.ContactUs} />
            <Home path="/" text={this.props.text.HomePage} />
            <HomeB path="/B" />
            <HomeB path="/C" />
            <Privacy path="/privacy" text={this.props.text} />
            <Extension
              path="/extension"
              text={this.props.text.ExtensionPage}
              lang={this.props.language}
              isMobile={this.props.isMobile}
              mobilePopupText={this.props.text.MobilePopup}
            />
            <ExtensionInstruction
              path="/extension-instruction-static"
              text={this.props.text.ExtensionInstructionPage}
              lang={this.props.language}
            />
            <ExtensionInstruction
              path="/extension-instruction"
              text={this.props.text.ExtensionInstructionPage}
              lang={this.props.language}
            />
            <ExtensionInnerInstruction path="/extension-inner-instruction" />
            <ExtenstionAdvertisement path="/extension-advertisement" />
            <Player
              path="/player"
              text={this.props.text.PlayerPage}
              isMobile={this.props.isMobile}
              mobilePopupText={this.props.text.MobilePopup}
            />
            <PlayerAnimation
              path="/player-animation"
              text={this.props.text.PlayerAnimation}
            />
            <PlayerInstruction path="player-instruction-youtube" />
            <PlayerInstruction path="/instruction-youtube-desctop" />
            <Plans path="/plans" text={this.props.text.PlansPage} />
            <NotFound path="*" text={this.props.text.NotFoundPage} />
            <_AppB
              path="/landing"
              text={this.props.text.Landing}
              mobilePopupText={this.props.text.MobilePopup}
            />
            <FarewellExtensionPage path="/farewell" />
          </ScrollToTop>
        </Router>
      </div>
    );
  }
}
