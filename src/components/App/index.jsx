import React from "react";
import { Router, createHistory, LocationProvider } from "@reach/router";
import "./App.scss";
import languageEn from "../../assets/languages/en.json";
import languageRu from "../../assets/languages/ru.json";
import languageCn from "../../assets/languages/cn.json";
import languageSp from "../../assets/languages/sp.json";
import Main from "../Main";
import createHashSource from "hash-source";

const useHash = process.env.PUBLIC_URL.indexOf("github") !== -1 ? true : false;
const source = useHash && createHashSource();
const history = createHistory(source || window);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.langStore = {
      en: languageEn,
      sp: languageSp,
      ru: languageRu,
      cn: languageCn,
    };
  }
  getUserLanguageFromInputList() {
    const userLang = this.getUserLanguage;
    const langList = this.getLangList().map(l => l.value);
    if (langList.every(l => l.value !== userLang)) {
      return langList[0];
    }
    return userLang;
  }
  getUserLanguage() {
    return (
      navigator.language ||
      (navigator.languages && navigator.languages[0]) ||
      navigator.userLanguage ||
      "en"
    );
  }
  handleLanguage = navigate => {
    return lang => {
      const pathname = useHash ? window.location.hash : window.location.pathname;
			let path = pathname + window.location.search;
      if (useHash) {
        path = path.replace("#", "");
      }
      const langs = Object.keys(this.langStore);
      if (
        langs.every(l => {
          const reg = new RegExp("^/" + l);
          return path.search(reg) === -1;
        })
      ) {
        navigate("/" + lang + (path === "/" ? "" : path));
      } else {
        let newPath = path.split("/");
        newPath.shift();
        newPath.shift();
        newPath = newPath.join("/");
        newPath = newPath ? "/" + newPath : "";
        newPath = "/" + lang + newPath;
        navigate(newPath);
      }
    };
  };
  getLangList() {
    return Object.keys(this.langStore).map(k => {
      return { value: k, name: this.langStore[k].name };
    });
  }
  render() {
    return (
      <div className="App">
        <LocationProvider history={history}>
          {context => (
            <Router>
              {Object.keys(this.langStore).map(lang => (
                <Main
                  path={`/${lang}/*`}
                  language={lang}
                  langList={this.getLangList()}
                  handleLanguage={this.handleLanguage(context.navigate)}
                  text={this.langStore[lang]}
                  key={lang}
                  location={history.location}
                />
              ))}
              <Main
                path={`/*/`}
                language={this.getUserLanguageFromInputList()}
                langList={this.getLangList()}
                handleLanguage={this.handleLanguage(context.navigate)}
                text={this.langStore[this.getUserLanguageFromInputList()]}
                key={this.getUserLanguageFromInputList()}
                location={history.location}
              />
            </Router>
          )}
        </LocationProvider>
      </div>
    );
  }
}

export default App;
