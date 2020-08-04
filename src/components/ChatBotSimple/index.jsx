import React, { Component } from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import botLogo from "../../assets/images/сhatBot/robo.png";
import "./chatBotSimple.scss";
import { steps } from "./chatBotSimpleLogic";

const theme = {
  background: "white",
  fontFamily: '"Montserrat", sans-serif',
  headerBgColor: "blue",
  headerFontColor: "#fff",
  headerFontSize: "15px",
  botBubbleColor: "blue",
  botFontColor: "#fff",
  userBubbleColor: "#fff",
  userFontColor: "#4a4a4a",
};

export default class ChatBotSimple extends Component {
  constructor(props) {
    super(props);
    this.state = {
      on: false,
    };
  }

  appearBot = () => {
    this.setState({
      on: true,
    });
  };

  disappearBot = () => {
    this.setState({
      on: false,
    });
  };

  render() {
    return (
      <div id="chat-bot">
        <div id="chat-bot_container">
          <div id="chat-bot_container_btn">
            {this.state.on === false && (
              <button
                onClick={() => {
                  this.appearBot();
                  window.gtag(this.props.gtag);
                }}
              >
                <img src={botLogo} alt="botLogo" />
              </button>
            )}
            {this.state.on === true && (
              <button onClick={() => this.disappearBot()}>
                <img src={botLogo} alt="botLogo" />
              </button>
            )}
          </div>
          <div id="chat-bot_container_content">
            {this.state.on === true && (
              <ThemeProvider theme={theme}>
                <ChatBot
                  headerTitle="Speech Recognition"
                  recognitionEnable={true}
                  steps={steps}
                />
              </ThemeProvider>
            )}
          </div>
        </div>
      </div>
    );
  }
}
